import type { Signal, Neighborhood } from "./types";


export class Clause {
    eval(_signals: Neighborhood): boolean {
        return true;
    }

    toString(): string {
        return "";
    }

    getSignals(): Set<Signal> {
        return new Set();
    }
}


export class Negation extends Clause {
    subclause: Clause;

    constructor(subclause: Clause) {
        super();
        this.subclause = subclause;
    }

    eval(signals: Neighborhood): boolean {
        if (this.subclause === undefined) {
            return false;
        }
        return !this.subclause.eval(signals);
    }

    toString(): string {
        if (this.subclause === undefined) {
            return "-";
        } else {
            return `-${this.subclause.toString()}`;
        }
    }

    getSignals(): Set<Signal> {
        return this.subclause.getSignals();
    }
}


/**
 * Representation of a conjunctive clause for rule conditions.
 * This evaluates to true if all the subclauses evaluate to true.
 */
export class Conjunction extends Clause {
    subclauses: Clause[];

    constructor(subclauses: Clause[]) {
        super();
        this.subclauses = [];
        for (const subclause of subclauses) {
            if (subclause instanceof Conjunction) {
                this.subclauses.push(...subclause.subclauses);
            } else {
                this.subclauses.push(subclause);
            }
        }
    }

    eval(signals: Neighborhood): boolean {
        return this.subclauses.every(subclause => subclause.eval(signals));
    }

    toString(): string {
        return `(${this.subclauses.map(subclause => subclause.toString()).join(" ")})`;
    }

    getSignals(): Set<Signal> {
        const signals = new Set<Signal>();
        for (const subclause of this.subclauses) {
            subclause.getSignals().forEach(signal => signals.add(signal));
        }
        return signals;
    }
}


/**
 * Representation of a disjunctive clause for rule conditions.
 * This evaluates to true if at least one of the subclauses evaluate to true.
 */
export class Disjunction extends Clause {
    subclauses: Clause[];

    constructor(subclauses: Clause[]) {
        super();
        this.subclauses = [];
        for (const subclause of subclauses) {
            if (subclause instanceof Disjunction) {
                this.subclauses.push(...subclause.subclauses);
            } else {
                this.subclauses = subclauses;
            }
        }
    }

    eval(signals: Neighborhood): boolean {
        return this.subclauses.some(subclause => subclause.eval(signals));
    }

    toString(): string {
        return `[${this.subclauses.map(subclause => subclause.toString()).join(" ")}]`;
    }

    getSignals(): Set<Signal> {
        const signals = new Set<Signal>();
        for (const subclause of this.subclauses) {
            subclause.getSignals().forEach(signal => signals.add(signal));
        }
        return signals;
    }
}


/**
 * Representation of a positive literal for rule conditions.
 * This evaluates to true if the corresponding signal appears.
 */
export class Literal extends Clause {
    signal: Signal;
    position: number;
    timeStep: number;

    constructor(signal: Signal, position = 0, timeStep = 0) {
        super();
        this.signal = signal;
        this.position = position;
        this.timeStep = timeStep;
    }

    eval(signals: Neighborhood): boolean {
        return signals[this.position].has(this.signal);
    }

    toString(): string {
        if (this.position === 0) {
            return `${Symbol.keyFor(this.signal)}`;
        } else {
            return `${this.position}.${Symbol.keyFor(this.signal)}`;
        }
    }

    getSignals(): Set<Signal> {
        return new Set([this.signal]);
    }
}
