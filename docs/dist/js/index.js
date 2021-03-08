import App from './App.svelte.js';
import '../css/index.css.proxy.js';

let app = new App({
    target: document.getElementById('app')
});

export default app;