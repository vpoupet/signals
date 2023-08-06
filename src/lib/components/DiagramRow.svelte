<script lang="ts">
    import { Configuration } from "../automata/Configuration";
    import type { Signal } from "../automata/types";
    import DiagramCell from "./DiagramCell.svelte";

    export let row: Configuration;
    export let signalIndexes: Map<Signal, number>;
</script>

<div class="row">
    {#each row.cells as cell, i (i)}
        <DiagramCell {cell} {signalIndexes} />
    {/each}
</div>

<style lang="scss">
    .row {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
</style>
