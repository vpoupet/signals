<script lang="ts">
    import type { Settings } from "../../types";

    export let settings: Settings;
    let { nbCells, nbSteps, timeGoesUp } = settings;

    function updateSettings() {
        settings = { nbCells, nbSteps, timeGoesUp };
    }
</script>

<div class="container">
    <h2>Settings</h2>
    <form on:submit|preventDefault={updateSettings}>
        <div>
            <span>Number of cells</span>
            <input id="nbCells" type="number" bind:value={nbCells} />
        </div>

        <div>
            <span>Number of rows</span>
            <input id="nbSteps" type="number" bind:value={nbSteps} />
        </div>
        <div>
            <span>Time goes up</span>
            <input id="timeGoesUp" type="checkbox" bind:checked={timeGoesUp} />
        </div>
        <button type="submit">Update</button>
    </form>
</div>

<style lang="scss">
    input[type="number"] {
        width: 4em;
    }
</style>
