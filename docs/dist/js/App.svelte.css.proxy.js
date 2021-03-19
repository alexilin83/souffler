// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".text.svelte-17g2cr5.svelte-17g2cr5{\n  padding-top:40%;\n  line-height:9rem\n}\n\n.checked.svelte-17g2cr5+span.svelte-17g2cr5:not(.checked){\n  -webkit-animation:svelte-17g2cr5-blink 1s linear infinite;\n          animation:svelte-17g2cr5-blink 1s linear infinite\n}\n\n@-webkit-keyframes svelte-17g2cr5-blink{\n  0%{\n    opacity:0\n  }\n\n  50%{\n    opacity:1\n  }\n}\n\n@keyframes svelte-17g2cr5-blink{\n  0%{\n    opacity:0\n  }\n\n  50%{\n    opacity:1\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}