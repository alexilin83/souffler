// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bars.svelte-1ugpmgo{\n  margin:0 0 50px;\n  background:#000\n}\n\n.text.svelte-1ugpmgo{\n  overflow:hidden;\n  overflow-y:auto;\n  height:500px;\n  font-size:60px;\n  line-height:1.2\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}