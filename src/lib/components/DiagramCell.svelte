<script lang="ts">
    import type { Signal } from "../automata/types";

    export let cell: Set<Signal>;
    export let signalIndexes: Map<Signal, number>;
    export let t: number, x: number;

    let cellSignalNames: string[];
    let cellSignalIndexes: number[];
    $: {
        cellSignalNames = [];
        cellSignalIndexes = [];

        for (const signal of cell) {
            const signalIndex = signalIndexes.get(signal);
            if (signalIndex !== undefined) {
                cellSignalIndexes.push(signalIndex);
            }
            const signalName = Symbol.keyFor(signal);
            if (signalName !== undefined) {
                cellSignalNames.push(signalName);
            }
        }
    }
</script>

<div
    class="cell"
    data-tooltip={`${x},${t}` + (cellSignalNames.length > 0 ? `: ${cellSignalNames.join(', ')}` : "")}
>
    {#each cellSignalIndexes as i (i)}
        <div class={`st-${i}`} />
    {/each}
</div>

<style lang="scss">
    .cell {
        aspect-ratio: 1;
        border: 1px solid #ddd;
        background-color: white;
        position: relative;
        flex-grow: 1;

        // div {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        // }
    }
</style>
