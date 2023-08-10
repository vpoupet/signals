import { Clause, Conjunction, Disjunction, Literal, Negation } from './Clause';
import { Configuration } from './Configuration';
import { type Signal } from './types';

// a time step is a number (positive or negative) followed by a slash
const timeStepRE = /(?:(?<time>[+-]?\d+)\/)/;
// a coordinate is a number (positive or negative) followed by a dot
const coordinateRE = /(?:(?<coord>[+-]?\d+)\.)/;
// a signal name is a sequence of letters, digits, and some allowed special characters
const signalNameRE = /(?<signal>[A-Za-z0-9_$']+)/;
// the sign of a literal is either + or -
const signRE = /(?<sign>[+-])/;

// regexp mathching a single item in a rule condition
const conditionItemRE = new RegExp(`${timeStepRE.source}?${coordinateRE.source}?${signRE.source}?${signalNameRE.source}`);
const conditionTokensRE = new RegExp(String.raw`[\[\]()]|${conditionItemRE.source}`, 'g');

// regexp matching a single token in a rule output
const outputItemRE = new RegExp(`${timeStepRE.source}?${coordinateRE.source}?${signalNameRE.source}`);
const outputTokensRE = new RegExp(outputItemRE, 'g');

class RuleParsingException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "RuleParsingException";
    }
}


class RuleOutput {
    neighbor: number;
    signal: Signal;
    futureStep: number;

    constructor(signal: Signal, neighbor: number, futureStep: number = 1) {
        this.neighbor = neighbor;
        this.signal = signal;
        this.futureStep = futureStep;
    }

    toString(): string {
        if (this.futureStep === 1) {
            return `${this.neighbor}.${Symbol.keyFor(this.signal)}`;
        } else {
            return `${this.neighbor}/${this.futureStep}.${Symbol.keyFor(this.signal)}`;
        }
    }
}


/**
 * Representation of a cellular automaton rule.
 * A rule consists of two parts: a condition and a list of signal outputs. Outputs are a list of objects
 * {neighbor: {int}, signal: {int}, futureStep: {int}}
 *
 * When executing the rule on a cell c at time t, the condition is evaluated (it depends on the set of signals
 * on the cell). If it is true, then for each output {neighbor, signal, futureStep}, the signal `signal` is added to
 * the cell (c + `neighbor`) at time (t + `futureStep`) in the space-time diagram.
 *
 * In order to correspond to a cellular automaton, `futureStep` should be either strictly positive or can be 0 if
 * `neighbor` is also 0.
 */
class Rule {
    condition: Clause;
    outputs: RuleOutput[];

    constructor(condition: Clause, outputs: RuleOutput[]) {
        this.condition = condition;
        this.outputs = outputs;
    }

    toString() {
        return `${this.condition.toString()}: ${this.outputs.map(output => output.toString()).join(" ")}`;
    }

    getOutputSignals(): Set<Signal> {
        const signals = new Set<Signal>();
        for (const output of this.outputs) {
            signals.add(output.signal);
        }
        return signals;
    }

    getConditionSignals(): Set<Signal> {
        return this.condition.getSignals();
    }
}

export class Automaton {
    /**
     * List of rules of the automaton (the rules are executed on each cell in the order they appear in the list)
     */
    rules: Rule[];
    /**
     * List of the names of signals that are used in the rules. Internally, signals are represented by their index in
     * this list.
     * This list is automatically updated when parsing the rules.
     */
    minNeighbor: number;
    maxNeighbor: number;
    /**
     * Number of steps that are computed ahead of time. This is 1 by default but if some rules affect times further down
     * (e.g. a 0/2 rule will add a signal to the cell two steps ahead) it is necessary to start preparing the
     * configuration at time (t + maxFutureSteps) when applying the rules to the configuration at time t.
     * This value is automatically updated when parsing the rules.
     */
    maxFutureDepth: number;

    constructor(rulesString: string) {
        this.rules = [];
        this.minNeighbor = 0;
        this.maxNeighbor = 0;
        this.maxFutureDepth = 1;

        const conditionsStack: { condition: Clause, indent: number }[] = [];
        for (let line of rulesString.split('\n')) {
            const indent = line.search(/\S|$/);    // indentation of current line
            line = line.replace(/#.*/, '').trim();  // remove comments and whitespace
            if (line.length === 0) continue;

            let conditionString: string | undefined;
            let outputsString: string;
            if (line.includes(":")) {
                // line has a condition and possible outputs
                [conditionString, outputsString] = line.split(":");
            } else {
                // line has only outputs
                outputsString = line;
            }
            let condition: Clause;
            let outputs: RuleOutput[];
            while (conditionsStack.length > 0 && conditionsStack[0].indent >= indent) {
                // remove irrelevant conditions from stack
                conditionsStack.shift();
            }

            // prepare condition
            if (conditionString) {
                // parse condition from line
                const lineCondition = this.parseCondition(conditionString);
                if (conditionsStack.length === 0) {
                    condition = lineCondition;
                } else {
                    condition = new Conjunction([conditionsStack[0].condition, lineCondition]);
                }
                conditionsStack.unshift({ condition, indent });   // push condition to stack
            } else {
                // get parent condition from stack
                condition = conditionsStack[0].condition;
            }

            if (outputsString) {
                // parse outputs from line
                outputs = this.parseOutputs(outputsString);
                this.rules.push(new Rule(condition, outputs));
            }
        }
    }

    readConditionTokens(conditionTokens: RegExpMatchArray): Clause {
        const token = conditionTokens.shift();
        if (token === undefined) {
            // empty condition
            return new Clause();
        }

        if (token === "[") {
            const subclauses: Clause[] = [];
            while (conditionTokens[0] !== "]") {
                subclauses.push(this.readConditionTokens(conditionTokens));
            }
            conditionTokens.shift();
            if (subclauses.length === 0) {
                // empty disjunction
                return new Negation(new Clause());
            } else if (subclauses.length === 1) {
                // disjunction with only one subclause
                return subclauses[0];
            } else {
                return new Disjunction(subclauses);
            }
        } else if (token === "(") {
            const subclauses: Clause[] = [];
            while (conditionTokens[0] !== ")") {
                subclauses.push(this.readConditionTokens(conditionTokens));
            }
            conditionTokens.shift();
            if (subclauses.length === 0) {
                // empty conjunction
                return new Clause();
            } else if (subclauses.length === 1) {
                // conjunction with only one subclause
                return subclauses[0];
            } else {
                return new Conjunction(subclauses);
            }
        } else {
            // token is a conditionItem
            const item = conditionItemRE.exec(token);
            if (item.groups === undefined) {
                throw new RuleParsingException(`Invalid condition item: ${token}`);
            }
            const timeStep = parseInt(item.groups.time || "0");
            const position = parseInt(item.groups.coord || "0");
            const signal = Symbol.for(item.groups.signal);
            if (item.groups.sign === "-") {
                return new Negation(new Literal(signal, position, timeStep));
            } else {
                return new Literal(signal, position, timeStep);
            }
        }
    }

    parseCondition(conditionString: string): Clause {
        const tokens = conditionString.match(conditionTokensRE);
        const condition = this.readConditionTokens(tokens);
        if (tokens.length > 0) {
            throw new RuleParsingException("Unbalanced condition");
        }
        return condition;
    }

    parseOutputs(outputsString: string): RuleOutput[] {
        const outputs: RuleOutput[] = [];
        while (true) {
            const m = outputTokensRE.exec(outputsString);
            if (m === null) {
                break;
            }
            if (m.groups === undefined) {
                throw new RuleParsingException(`Invalid output: ${m[0]}`);
            }
            const timeStep = parseInt(m.groups?.time || '1');
            const position = parseInt(m.groups?.coord || '0');
            const signal = Symbol.for(m.groups?.signal);
            outputs.push(new RuleOutput(signal, position, timeStep));
        }
        return outputs;
    }

    /**
     * Returns a space-time diagram from a starting configuration
     * 
     * The input is a list of configurations, because some future configurations might already have signals from previous
     * steps (when a rule output sends a signal several time steps ahead). If the list has less than (maxFutureSteps + 1)
     * (corresponding to the current configuration and the `maxFutureSteps` next ones) new empty configurations are added
     *
     * @param {[Rule]} rules list of rules to execute
     * @param {[[Set<int>]]} configs a list of configurations, each configuration being a list of sets of signals (one for
     * each cell in the configuration). `configs[0]` is the configuration at time t (the one to which the rules are
     * applied) and the other ones are configurations at subsequent times (t + 1, t + 2, ...) if they already have signals.
     * New configurations can be added as needed with empty sets for all cells.
     * 
     * @returns {[[Set<int>]]} the list of configurations after applying the rules. Note that because some rules can affect
     * the configuration at time t (rules 0/0) the configuration to which the rules were applied might have changed. The
     * configurations are modified in place (the returned list is not a copy of the input).
     */
    makeDiagram(initialConfiguration: Configuration, nbSteps: number): Configuration[] {
        const nbCells = initialConfiguration.getSize();
        const diagram = [initialConfiguration];
        for (let i = 0; i < nbSteps; i++) {
            diagram.push(new Configuration(nbCells));
        }
        for (let t = 0; t < nbSteps; t++) {
            const config = diagram[t];
            for (let c = 0; c < nbCells; c++) {
                const neighborhood = config.getNeighborhood(c, this.minNeighbor, this.maxNeighbor);
                for (const rule of this.rules) {
                    if (rule.condition.eval(neighborhood)) {
                        rule.outputs.forEach(output => {
                            const targetCell = c + output.neighbor;
                            if (t + output.futureStep < diagram.length && 0 <= targetCell && targetCell < nbCells) {
                                diagram[t + output.futureStep].cells[targetCell].add(output.signal);
                            }
                        });
                    }
                }
            }
        }
        return diagram;
    }

    getSignals(): Set<Signal> {
        const signals = new Set<Signal>();
        for (const rule of this.rules) {
            rule.getConditionSignals().forEach(signal => signals.add(signal));
            rule.getOutputSignals().forEach(signal => signals.add(signal));
        }
        return signals;
    }

    toString(): string {
        return this.rules.map(rule => rule.toString()).join("\n");
    }
}







