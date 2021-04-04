// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".text.svelte-1w0po35.svelte-1w0po35{\n  padding-top:40%\n}\n\n.checked.svelte-1w0po35+span.svelte-1w0po35:not(.checked){\n  background:grey;\n  -webkit-animation:svelte-1w0po35-blink 1s linear infinite;\n          animation:svelte-1w0po35-blink 1s linear infinite\n}\n\n@-webkit-keyframes svelte-1w0po35-blink{\n  0%{\n    opacity:0\n  }\n\n  50%{\n    opacity:1\n  }\n}\n\n@keyframes svelte-1w0po35-blink{\n  0%{\n    opacity:0\n  }\n\n  50%{\n    opacity:1\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}