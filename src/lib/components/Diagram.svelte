<script lang="ts">
    import type { Settings } from "../../types";
    import type { Automaton } from "../automata/Automaton";
    import { Configuration } from "../automata/Configuration";
    import type { Signal } from "../automata/types";
    import DiagramRow from "./DiagramRow.svelte";

    export let automaton: Automaton;
    export let settings: Settings;

    let initialConfiguration: Configuration;
    let diagram: Configuration[];
    let signalsList: Signal[];
    let signalIndexes: Map<Signal, number>;

    $: {
        initialConfiguration = new Configuration(settings.nbCells);
        initialConfiguration.cells[0].add(Symbol.for("Init"));
        diagram = automaton.makeDiagram(initialConfiguration, settings.nbSteps);
        if (settings.timeGoesUp) {
            diagram.reverse();
        }
    }

    $: {
        signalsList = [...automaton.getSignals()];
        signalIndexes = new Map<Signal, number>();
        signalsList.forEach((signal, i) => signalIndexes.set(signal, i));
    }
</script>

<div class="diagram">
    {#each diagram as row, i (i)}
        <DiagramRow {row} {signalIndexes} />
    {/each}
</div>

<style lang="scss">
    .diagram {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
