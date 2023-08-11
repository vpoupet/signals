<script lang="ts">
  import { Automaton } from "./lib/automata/Automaton";
  import initialRules from "./lib/automata/rules/fischer";
  import Diagram from "./lib/components/Diagram.svelte";
  import Rulebox from "./lib/components/Rulebox.svelte";
  import Settings from "./lib/components/Settings.svelte";

  let settings = {
    nbCells: 40,
    nbSteps: 60,
    timeGoesUp: true,
  };

  let rules = initialRules;
  let automaton;

  $: {
    automaton = new Automaton(rules);
    console.log(automaton.toString());
  }
</script>

<main class="container">
  <h1>Signal Automata</h1>
  <Settings bind:settings />
  <Rulebox bind:rules />
  <Diagram {automaton} {settings} />
  <button on:click={() => console.log(settings)}>Go</button>
</main>

<style>
</style>
