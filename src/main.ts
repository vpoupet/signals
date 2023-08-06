import './style.scss';
import './lib/style/pico/pico.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
