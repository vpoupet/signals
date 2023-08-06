<script lang="ts">
    export let rules: string;
    let tempRules: string = rules;

    function updateRules() {
        rules = tempRules;
    }
</script>

<div class="container">
    <h2>Rules</h2>
    <form on:submit|preventDefault={updateRules}>
    <textarea class="rulebox" bind:value={tempRules}></textarea>
    <button type="submit">Update</button>
    </form>
</div>

<style lang="scss">
    .rulebox {
        width: 100%;
        height: 60ex;
        margin-bottom: 10px;
    }
</style>