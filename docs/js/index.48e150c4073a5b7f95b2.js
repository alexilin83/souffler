(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(52))},function(t,n,e){var r=e(0),o=e(40),i=e(4),c=e(26),u=e(43),a=e(60),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(5),o=e(6),i=e(18);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(5),o=e(41),i=e(9),c=e(25),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports={}},function(t,n,e){var r=e(0),o=e(3),i=e(4),c=e(24),u=e(46),a=e(20),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(9),o=e(74);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(39),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(59),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r,o,i,c=e(65),u=e(0),a=e(7),f=e(3),s=e(4),l=e(23),p=e(30),d=e(28),v=u.WeakMap;if(c){var h=l.state||(l.state=new v),g=h.get,y=h.has,x=h.set;r=function(t,n){return n.facade=t,x.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var b=p("state");d[b]=!0,r=function(t,n){return n.facade=t,f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(4),o=e(14),i=e(30),c=e(73),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(24),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,n,e){var r=e(0),o=e(3);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r,o=e(9),i=e(61),c=e(29),u=e(28),a=e(64),f=e(42),s=e(30),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"</"+"script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete v.prototype[c[e]];return v()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=v(),void 0===n?e:i(e,n)}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(40),o=e(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(0),o=e(32).f,i=e(3),c=e(13),u=e(24),a=e(68),f=e(71);t.exports=function(t,n){var e,s,l,p,d,v=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(h?s:v+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(5),o=e(67),i=e(18),c=e(16),u=e(25),a=e(4),f=e(41),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(44),o=e(29).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(6).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r,o,i=e(78),c=e(79),u=RegExp.prototype.exec,a=String.prototype.replace,f=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,e,r,o,c=this,f=l&&c.sticky,d=i.call(c),v=c.source,h=0,g=t;return f&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),e=new RegExp("^(?:"+v+")",d)),p&&(e=new RegExp("^"+v+"$(?!\\s)",d)),s&&(n=c.lastIndex),r=u.call(f?e:c,g),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){"use strict";var r,o=e(48),i=e(5),c=e(0),u=e(7),a=e(4),f=e(37),s=e(3),l=e(13),p=e(6).f,d=e(21),v=e(15),h=e(1),g=e(26),y=c.Int8Array,x=y&&y.prototype,b=c.Uint8ClampedArray,m=b&&b.prototype,w=y&&d(y),A=x&&d(x),E=Object.prototype,S=E.isPrototypeOf,T=h("toStringTag"),O=g("TYPED_ARRAY_TAG"),_=o&&!!v&&"Opera"!==f(c.opera),L=!1,R={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},I={BigInt64Array:8,BigUint64Array:8},k=function(t){if(!u(t))return!1;var n=f(t);return a(R,n)||a(I,n)};for(r in R)c[r]||(_=!1);if((!_||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},_))for(r in R)c[r]&&v(c[r],w);if((!_||!A||A===E)&&(A=w.prototype,_))for(r in R)c[r]&&v(c[r].prototype,A);if(_&&d(m)!==A&&v(m,A),i&&!a(A,T))for(r in L=!0,p(A,T,{get:function(){return u(this)?this[O]:void 0}}),R)c[r]&&s(c[r],O,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:_,TYPED_ARRAY_TAG:L&&O,aTypedArray:function(t){if(k(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(v){if(S.call(w,t))return t}else for(var n in R)if(a(R,r)){var e=c[n];if(e&&(t===e||S.call(e,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,n,e){if(i){if(e)for(var r in R){var o=c[r];o&&a(o.prototype,t)&&delete o.prototype[t]}A[t]&&!e||l(A,t,e?n:_&&x[t]||n)}},exportTypedArrayStaticMethod:function(t,n,e){var r,o;if(i){if(v){if(e)for(r in R)(o=c[r])&&a(o,t)&&delete o[t];if(w[t]&&!e)return;try{return l(w,t,e?n:_&&y[t]||n)}catch(t){}}for(r in R)!(o=c[r])||o[t]&&!e||l(o,t,n)}},isView:function(t){if(!u(t))return!1;var n=f(t);return"DataView"===n||a(R,n)||a(I,n)},isTypedArray:k,TypedArray:w,TypedArrayPrototype:A}},function(t,n,e){var r=e(88),o=e(11),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r=e(0),o=e(53),i=e(54),c=e(3),u=e(1),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=r[l],d=p&&p.prototype;if(d){if(d[a]!==s)try{c(d,a,s)}catch(t){d[a]=s}if(d[f]||c(d,f,l),o[l])for(var v in i)if(d[v]!==i[v])try{c(d,v,i[v])}catch(t){d[v]=i[v]}}}},function(t,n,e){var r=e(2),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(22),o=e(23);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(5),o=e(2),i=e(42);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(7),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(56),o=e(57),i=e(2);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},function(t,n,e){var r=e(4),o=e(16),i=e(63).indexOf,c=e(28);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(10),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(23),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){"use strict";var r,o,i,c=e(2),u=e(21),a=e(3),f=e(4),s=e(1),l=e(22),p=s("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):d=!0);var v=null==r||c((function(){var t={};return r[p].call(t)!==t}));v&&(r={}),l&&!v||f(r,p)||a(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},function(t,n){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(10),o=e(8);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=o(n);if(n!==e)throw RangeError("Wrong length or index");return e}},function(t,n,e){var r=e(98);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(16),o=e(55),i=e(12),c=e(20),u=e(66),a="Array Iterator",f=c.set,s=c.getterFor(a);t.exports=u(Array,"Array",(function(t,n){f(this,{type:a,target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var r=e(1),o=e(27),i=e(6),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,e){var r=e(11),o=e(0);t.exports="process"==r(o.process)},function(t,n,e){var r,o,i=e(0),c=e(58),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(19);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(43);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(5),o=e(6),i=e(9),c=e(62);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(44),o=e(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(16),o=e(8),i=e(45),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(19);t.exports=r("document","documentElement")},function(t,n,e){var r=e(0),o=e(46),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){"use strict";var r=e(31),o=e(72),i=e(21),c=e(15),u=e(34),a=e(3),f=e(13),s=e(1),l=e(22),p=e(12),d=e(47),v=d.IteratorPrototype,h=d.BUGGY_SAFARI_ITERATORS,g=s("iterator"),y="keys",x="values",b="entries",m=function(){return this};t.exports=function(t,n,e,s,d,w,A){o(e,n,s);var E,S,T,O=function(t){if(t===d&&k)return k;if(!h&&t in R)return R[t];switch(t){case y:case x:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},_=n+" Iterator",L=!1,R=t.prototype,I=R[g]||R["@@iterator"]||d&&R[d],k=!h&&I||O(d),$="Array"==n&&R.entries||I;if($&&(E=i($.call(new t)),v!==Object.prototype&&E.next&&(l||i(E)===v||(c?c(E,v):"function"!=typeof E[g]&&a(E,g,m)),u(E,_,!0,!0),l&&(p[_]=m))),d==x&&I&&I.name!==x&&(L=!0,k=function(){return I.call(this)}),l&&!A||R[g]===k||a(R,g,k),p[n]=k,d)if(S={values:O(x),keys:w?k:O(y),entries:O(b)},A)for(T in S)(h||L||!(T in R))&&f(R,T,S[T]);else r({target:n,proto:!0,forced:h||L},S);return S}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(69),i=e(32),c=e(6);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(19),o=e(33),i=e(70),c=e(9);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(47).IteratorPrototype,o=e(27),i=e(18),c=e(34),u=e(12),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,e){var r=e(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(76),o=e(9),i=e(8),c=e(10),u=e(17),a=e(80),f=e(82),s=e(83),l=Math.max,p=Math.min;r("replace",2,(function(t,n,e,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,h=d?"$":"$0";return[function(e,r){var o=u(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!d&&v||"string"==typeof r&&-1===r.indexOf(h)){var u=e(n,t,this,r);if(u.done)return u.value}var g=o(t),y=String(this),x="function"==typeof r;x||(r=String(r));var b=g.global;if(b){var m=g.unicode;g.lastIndex=0}for(var w=[];;){var A=s(g,y);if(null===A)break;if(w.push(A),!b)break;""===String(A[0])&&(g.lastIndex=a(y,i(g.lastIndex),m))}for(var E,S="",T=0,O=0;O<w.length;O++){A=w[O];for(var _=String(A[0]),L=l(p(c(A.index),y.length),0),R=[],I=1;I<A.length;I++)R.push(void 0===(E=A[I])?E:String(E));var k=A.groups;if(x){var $=[_].concat(R,L,y);void 0!==k&&$.push(k);var P=String(r.apply(void 0,$))}else P=f(_,y,L,R,k,r);L>=T&&(S+=y.slice(T,L)+P,T=L+_.length)}return S+y.slice(T)}]}))},function(t,n,e){"use strict";e(77);var r=e(13),o=e(2),i=e(1),c=e(35),u=e(3),a=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),d=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var v=i(t),h=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),g=h&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!h||!g||"replace"===t&&(!f||!s||p)||"split"===t&&!d){var y=/./[v],x=e(v,""[t],(function(t,n,e,r,o){return n.exec===c?h&&!o?{done:!0,value:y.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=x[0],m=x[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},function(t,n,e){"use strict";var r=e(31),o=e(35);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(9);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(2);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){"use strict";var r=e(81).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(10),o=e(17),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(14),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,n,e,a,f,s){var l=e+t.length,p=a.length,d=u;return void 0!==f&&(f=r(f),d=c),i.call(s,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(l);case"<":c=f[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>p){var s=o(u/10);return 0===s?r:s<=p?void 0===a[s-1]?i.charAt(1):a[s-1]+i.charAt(1):r}c=a[u-1]}return void 0===c?"":c}))}},function(t,n,e){var r=e(11),o=e(35);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){e(85)("Uint8",(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){"use strict";var r=e(31),o=e(0),i=e(5),c=e(86),u=e(36),a=e(89),f=e(49),s=e(18),l=e(3),p=e(8),d=e(50),v=e(93),h=e(25),g=e(4),y=e(37),x=e(7),b=e(27),m=e(15),w=e(33).f,A=e(95),E=e(99).forEach,S=e(102),T=e(6),O=e(32),_=e(20),L=e(103),R=_.get,I=_.set,k=T.f,$=O.f,P=Math.round,j=o.RangeError,C=a.ArrayBuffer,M=a.DataView,U=u.NATIVE_ARRAY_BUFFER_VIEWS,N=u.TYPED_ARRAY_TAG,F=u.TypedArray,D=u.TypedArrayPrototype,B=u.aTypedArrayConstructor,V=u.isTypedArray,G="BYTES_PER_ELEMENT",W="Wrong length",Y=function(t,n){for(var e=0,r=n.length,o=new(B(t))(r);r>e;)o[e]=n[e++];return o},q=function(t,n){k(t,n,{get:function(){return R(this)[n]}})},z=function(t){var n;return t instanceof C||"ArrayBuffer"==(n=y(t))||"SharedArrayBuffer"==n},H=function(t,n){return V(t)&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},K=function(t,n){return H(t,n=h(n,!0))?s(2,t[n]):$(t,n)},J=function(t,n,e){return!(H(t,n=h(n,!0))&&x(e)&&g(e,"value"))||g(e,"get")||g(e,"set")||e.configurable||g(e,"writable")&&!e.writable||g(e,"enumerable")&&!e.enumerable?k(t,n,e):(t[n]=e.value,t)};i?(U||(O.f=K,T.f=J,q(D,"buffer"),q(D,"byteOffset"),q(D,"byteLength"),q(D,"length")),r({target:"Object",stat:!0,forced:!U},{getOwnPropertyDescriptor:K,defineProperty:J}),t.exports=function(t,n,e){var i=t.match(/\d+$/)[0]/8,u=t+(e?"Clamped":"")+"Array",a="get"+t,s="set"+t,h=o[u],g=h,y=g&&g.prototype,T={},O=function(t,n){k(t,n,{get:function(){return function(t,n){var e=R(t);return e.view[a](n*i+e.byteOffset,!0)}(this,n)},set:function(t){return function(t,n,r){var o=R(t);e&&(r=(r=P(r))<0?0:r>255?255:255&r),o.view[s](n*i+o.byteOffset,r,!0)}(this,n,t)},enumerable:!0})};U?c&&(g=n((function(t,n,e,r){return f(t,g,u),L(x(n)?z(n)?void 0!==r?new h(n,v(e,i),r):void 0!==e?new h(n,v(e,i)):new h(n):V(n)?Y(g,n):A.call(g,n):new h(d(n)),t,g)})),m&&m(g,F),E(w(h),(function(t){t in g||l(g,t,h[t])})),g.prototype=y):(g=n((function(t,n,e,r){f(t,g,u);var o,c,a,s=0,l=0;if(x(n)){if(!z(n))return V(n)?Y(g,n):A.call(g,n);o=n,l=v(e,i);var h=n.byteLength;if(void 0===r){if(h%i)throw j(W);if((c=h-l)<0)throw j(W)}else if((c=p(r)*i)+l>h)throw j(W);a=c/i}else a=d(n),o=new C(c=a*i);for(I(t,{buffer:o,byteOffset:l,byteLength:c,length:a,view:new M(o)});s<a;)O(t,s++)})),m&&m(g,F),y=g.prototype=b(D)),y.constructor!==g&&l(y,"constructor",g),N&&l(y,N,u),T[u]=g,r({global:!0,forced:g!=h,sham:!U},T),G in g||l(g,G,i),G in y||l(y,G,i),S(u)}):t.exports=function(){}},function(t,n,e){var r=e(0),o=e(2),i=e(87),c=e(36).NATIVE_ARRAY_BUFFER_VIEWS,u=r.ArrayBuffer,a=r.Int8Array;t.exports=!c||!o((function(){a(1)}))||!o((function(){new a(-1)}))||!i((function(t){new a,new a(null),new a(1.5),new a(t)}),!0)||o((function(){return 1!==new a(new u(2),1,void 0).length}))},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){"use strict";var r=e(0),o=e(5),i=e(48),c=e(3),u=e(90),a=e(2),f=e(49),s=e(10),l=e(8),p=e(50),d=e(91),v=e(21),h=e(15),g=e(33).f,y=e(6).f,x=e(92),b=e(34),m=e(20),w=m.get,A=m.set,E="ArrayBuffer",S="DataView",T="Wrong index",O=r.ArrayBuffer,_=O,L=r.DataView,R=L&&L.prototype,I=Object.prototype,k=r.RangeError,$=d.pack,P=d.unpack,j=function(t){return[255&t]},C=function(t){return[255&t,t>>8&255]},M=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},U=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},N=function(t){return $(t,23,4)},F=function(t){return $(t,52,8)},D=function(t,n){y(t.prototype,n,{get:function(){return w(this)[n]}})},B=function(t,n,e,r){var o=p(e),i=w(t);if(o+n>i.byteLength)throw k(T);var c=w(i.buffer).bytes,u=o+i.byteOffset,a=c.slice(u,u+n);return r?a:a.reverse()},V=function(t,n,e,r,o,i){var c=p(e),u=w(t);if(c+n>u.byteLength)throw k(T);for(var a=w(u.buffer).bytes,f=c+u.byteOffset,s=r(+o),l=0;l<n;l++)a[f+l]=s[i?l:n-l-1]};if(i){if(!a((function(){O(1)}))||!a((function(){new O(-1)}))||a((function(){return new O,new O(1.5),new O(NaN),O.name!=E}))){for(var G,W=(_=function(t){return f(this,_),new O(p(t))}).prototype=O.prototype,Y=g(O),q=0;Y.length>q;)(G=Y[q++])in _||c(_,G,O[G]);W.constructor=_}h&&v(R)!==I&&h(R,I);var z=new L(new _(2)),H=R.setInt8;z.setInt8(0,2147483648),z.setInt8(1,2147483649),!z.getInt8(0)&&z.getInt8(1)||u(R,{setInt8:function(t,n){H.call(this,t,n<<24>>24)},setUint8:function(t,n){H.call(this,t,n<<24>>24)}},{unsafe:!0})}else _=function(t){f(this,_,E);var n=p(t);A(this,{bytes:x.call(new Array(n),0),byteLength:n}),o||(this.byteLength=n)},L=function(t,n,e){f(this,L,S),f(t,_,S);var r=w(t).byteLength,i=s(n);if(i<0||i>r)throw k("Wrong offset");if(i+(e=void 0===e?r-i:l(e))>r)throw k("Wrong length");A(this,{buffer:t,byteLength:e,byteOffset:i}),o||(this.buffer=t,this.byteLength=e,this.byteOffset=i)},o&&(D(_,"byteLength"),D(L,"buffer"),D(L,"byteLength"),D(L,"byteOffset")),u(L.prototype,{getInt8:function(t){return B(this,1,t)[0]<<24>>24},getUint8:function(t){return B(this,1,t)[0]},getInt16:function(t){var n=B(this,2,t,arguments.length>1?arguments[1]:void 0);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=B(this,2,t,arguments.length>1?arguments[1]:void 0);return n[1]<<8|n[0]},getInt32:function(t){return U(B(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return U(B(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return P(B(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return P(B(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,n){V(this,1,t,j,n)},setUint8:function(t,n){V(this,1,t,j,n)},setInt16:function(t,n){V(this,2,t,C,n,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,n){V(this,2,t,C,n,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,n){V(this,4,t,M,n,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,n){V(this,4,t,M,n,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,n){V(this,4,t,N,n,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,n){V(this,8,t,F,n,arguments.length>2?arguments[2]:void 0)}});b(_,E),b(L,S),t.exports={ArrayBuffer:_,DataView:L}},function(t,n,e){var r=e(13);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n){var e=Math.abs,r=Math.pow,o=Math.floor,i=Math.log,c=Math.LN2;t.exports={pack:function(t,n,u){var a,f,s,l=new Array(u),p=8*u-n-1,d=(1<<p)-1,v=d>>1,h=23===n?r(2,-24)-r(2,-77):0,g=t<0||0===t&&1/t<0?1:0,y=0;for((t=e(t))!=t||t===1/0?(f=t!=t?1:0,a=d):(a=o(i(t)/c),t*(s=r(2,-a))<1&&(a--,s*=2),(t+=a+v>=1?h/s:h*r(2,1-v))*s>=2&&(a++,s/=2),a+v>=d?(f=0,a=d):a+v>=1?(f=(t*s-1)*r(2,n),a+=v):(f=t*r(2,v-1)*r(2,n),a=0));n>=8;l[y++]=255&f,f/=256,n-=8);for(a=a<<n|f,p+=n;p>0;l[y++]=255&a,a/=256,p-=8);return l[--y]|=128*g,l},unpack:function(t,n){var e,o=t.length,i=8*o-n-1,c=(1<<i)-1,u=c>>1,a=i-7,f=o-1,s=t[f--],l=127&s;for(s>>=7;a>0;l=256*l+t[f],f--,a-=8);for(e=l&(1<<-a)-1,l>>=-a,a+=n;a>0;e=256*e+t[f],f--,a-=8);if(0===l)l=1-u;else{if(l===c)return e?NaN:s?-1/0:1/0;e+=r(2,n),l-=u}return(s?-1:1)*e*r(2,l-n)}}},function(t,n,e){"use strict";var r=e(14),o=e(45),i=e(8);t.exports=function(t){for(var n=r(this),e=i(n.length),c=arguments.length,u=o(c>1?arguments[1]:void 0,e),a=c>2?arguments[2]:void 0,f=void 0===a?e:o(a,e);f>u;)n[u++]=t;return n}},function(t,n,e){var r=e(94);t.exports=function(t,n){var e=r(t);if(e%n)throw RangeError("Wrong offset");return e}},function(t,n,e){var r=e(10);t.exports=function(t){var n=r(t);if(n<0)throw RangeError("The argument can't be less than 0");return n}},function(t,n,e){var r=e(14),o=e(8),i=e(96),c=e(97),u=e(51),a=e(36).aTypedArrayConstructor;t.exports=function(t){var n,e,f,s,l,p,d=r(t),v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,y=i(d);if(null!=y&&!c(y))for(p=(l=y.call(d)).next,d=[];!(s=p.call(l)).done;)d.push(s.value);for(g&&v>2&&(h=u(h,arguments[2],2)),e=o(d.length),f=new(a(this))(e),n=0;e>n;n++)f[n]=g?h(d[n],n):d[n];return f}},function(t,n,e){var r=e(37),o=e(12),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(1),o=e(12),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(51),o=e(39),i=e(14),c=e(8),u=e(100),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,h,g,y){for(var x,b,m=i(v),w=o(m),A=r(h,g,3),E=c(w.length),S=0,T=y||u,O=n?T(v,E):e||p?T(v,0):void 0;E>S;S++)if((d||S in w)&&(b=A(x=w[S],S,m),t))if(n)O[S]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return S;case 2:a.call(O,x)}else switch(t){case 4:return!1;case 7:a.call(O,x)}return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,n,e){var r=e(7),o=e(101),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(19),o=e(6),i=e(1),c=e(5),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(7),o=e(15);t.exports=function(t,n,e){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(c=i.prototype)&&c!==e.prototype&&o(t,c),t}},function(t,n,e){"use strict";e.r(n);e(38),e(75),e(84);function r(){}function o(t){return t()}function i(){return Object.create(null)}function c(t){t.forEach(o)}function u(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function f(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function v(){return d(" ")}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){t.value=null==n?"":n}function x(t,n,e){t.classList[e?"add":"remove"](n)}let b;function m(t){b=t}const w=[],A=[],E=[],S=[],T=Promise.resolve();let O=!1;function _(t){E.push(t)}let L=!1;const R=new Set;function I(){if(!L){L=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];m(n),k(n.$$)}for(m(null),w.length=0;A.length;)A.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];R.has(n)||(R.add(n),n())}E.length=0}while(w.length);for(;S.length;)S.pop()();O=!1,L=!1,R.clear()}}function k(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const $=new Set;function P(t,n){-1===t.$$.dirty[0]&&(w.push(t),O||(O=!0,T.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(t,n,e,a,f,s,p=[-1]){const d=b;m(t);const v=t.$$={fragment:null,ctx:null,props:s,update:r,not_equal:f,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:i(),dirty:p,skip_bound:!1};let h=!1;if(v.ctx=e?e(t,n.props||{},((n,e,...r)=>{const o=r.length?r[0]:e;return v.ctx&&f(v.ctx[n],v.ctx[n]=o)&&(!v.skip_bound&&v.bound[n]&&v.bound[n](o),h&&P(t,n)),e})):[],v.update(),h=!0,c(v.before_update),v.fragment=!!a&&a(v.ctx),n.target){if(n.hydrate){const t=(x=n.target,Array.from(x.childNodes));v.fragment&&v.fragment.l(t),t.forEach(l)}else v.fragment&&v.fragment.c();n.intro&&((g=t.$$.fragment)&&g.i&&($.delete(g),g.i(y))),function(t,n,e,r){const{fragment:i,on_mount:a,on_destroy:f,after_update:s}=t.$$;i&&i.m(n,e),r||_((()=>{const n=a.map(o).filter(u);f?f.push(...n):c(n),t.$$.on_mount=[]})),s.forEach(_)}(t,n.target,n.anchor,n.customElement),I()}var g,y,x;m(d)}function C(t,n,e){const r=t.slice();return r[27]=n[e],r}function M(t){let n,e,o,i,a,d,x,b,m,w,A=t[0],E=[];for(let n=0;n<A.length;n+=1)E[n]=N(C(t,A,n));return{c(){n=p("div"),e=p("canvas"),i=v(),a=p("div"),d=p("input"),x=v(),b=p("div");for(let t=0;t<E.length;t+=1)E[t].c();g(d,"type","range"),g(d,"min","0"),g(d,"max","200"),g(d,"step","100"),g(a,"class","absolute top-0 right-0 p-2"),g(n,"class","relative w-full h-1/6 flex-initial bg-gray-500 text-white"),g(b,"class","text w-full h-5/6 flex-initial flex-wrap overflow-y-auto p-4 xl:p-8 bg-gray-100 text-5xl xl:text-8xl svelte-17g2cr5")},m(c,l){s(c,n,l),f(n,e),f(n,i),f(n,a),f(a,d),y(d,t[3]),s(c,x,l),s(c,b,l);for(let t=0;t<E.length;t+=1)E[t].m(b,null);var p;t[7](b),m||(w=[(p=o=t[5].call(null,e),p&&u(p.destroy)?p.destroy:r),h(d,"change",t[6]),h(d,"input",t[6])],m=!0)},p(t,n){if(8&n&&y(d,t[3]),1&n){let e;for(A=t[0],e=0;e<A.length;e+=1){const r=C(t,A,e);E[e]?E[e].p(r,n):(E[e]=N(r),E[e].c(),E[e].m(b,null))}for(;e<E.length;e+=1)E[e].d(1);E.length=A.length}},d(e){e&&l(n),e&&l(x),e&&l(b),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(E,e),t[7](null),m=!1,c(w)}}}function U(t){let n,e,o;return{c(){n=p("button"),n.textContent="Начать",g(n,"class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 px-4 py-2 text-white rounded-lg")},m(r,i){s(r,n,i),e||(o=h(n,"click",t[4]),e=!0)},p:r,d(t){t&&l(n),e=!1,o()}}}function N(t){let n,e,r=t[27].word+"";return{c(){n=p("span"),e=d(r),g(n,"class","relative inline-block mr-5 mb-5 p-5 leading-none svelte-17g2cr5"),x(n,"checked",t[27].checked),x(n,"bg-red-500",t[27].marked)},m(t,r){s(t,n,r),f(n,e)},p(t,o){1&o&&r!==(r=t[27].word+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,r),1&o&&x(n,"checked",t[27].checked),1&o&&x(n,"bg-red-500",t[27].marked)},d(t){t&&l(n)}}}function F(t){let n;function e(t,n){return t[1]?M:U}let o=e(t),i=o(t);return{c(){n=p("div"),i.c(),g(n,"class","container mx-auto h-screen flex flex-wrap")},m(t,e){s(t,n,e),i.m(n,null)},p(t,[r]){o===(o=e(t))&&i?i.p(t,r):(i.d(1),i=o(t),i&&(i.c(),i.m(n,null)))},i:r,o:r,d(t){t&&l(n),i.d()}}}function D(t,n,e){const r=window.SpeechRecognition||window.webkitSpeechRecognition,o=window.SpeechGrammarList||window.webkitSpeechGrammarList,i=(window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent,"Повседневная практика показывает, что рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Товарищи! консультация с широким активом играет важную роль в формировании модели развития. Повседневная практика показывает, что консультация с широким активом требуют от нас анализа новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание дальнейших направлений развития. Не следует, однако забывать, что укрепление и развитие структуры играет важную роль в формировании систем массового участия.".split(" "));let c,u,a,f,s,l,p,d,v,h,g,y,x,b,m=i.map((t=>({word:t.replace(/[^а-я\d\s]+/gi,""),checked:!1,marked:!1}))),w=100;function E(){d=requestAnimationFrame(E),u.getByteFrequencyData(h),s.fillStyle="rgb(0, 0, 0)",s.fillRect(0,0,l,p);let t,n=l/v*2.5,r=0;for(let e=0;e<v;e++)t=h[e],s.fillStyle=`rgb(127, ${t+100}, 0)`,s.fillRect(r,p-t/2,n,t/2),r+=n+1;g=Math.max(...h)/256,g>.4&&e(2,f.scrollTop+=1+1*w/100,f)}return[m,c,f,w,function(){e(1,c=new(window.AudioContext||window.webkitAudioContext)),u=c.createAnalyser(),navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(t){a=c.createMediaStreamSource(t),a.connect(u),u.fftSize=256,u.minDecibels=-90,u.maxDecibels=-10,u.smoothingTimeConstant=.85,v=u.frequencyBinCount,h=new Uint8Array(v),s.clearRect(0,0,l,p),E(),x.start()})).catch((function(t){console.error(t)})),y="#JSGF V1.0; grammar words; public <word> = "+i.join(" | ")+" ;",x=new r,b=new o,b.addFromString(y,1),x.grammars=b,x.lang="ru-RU",x.interiumResults=!1,x.maxAlternatives=1,x.addEventListener("start",(function(){console.log("start")})),x.addEventListener("end",(function(){console.log("end"),x.start()})),x.addEventListener("audiostart",(function(){console.log("audio start")})),x.addEventListener("audioend",(function(){console.log("audio end")})),x.addEventListener("soundstart",(function(){console.log("sound start")})),x.addEventListener("soundend",(function(){console.log("sound end")})),x.addEventListener("speechstart",(function(){console.log("speech start")})),x.addEventListener("speechend",(function(){console.log("speech end")})),x.addEventListener("result",(function(t){console.log("result");const n=t.results.length-1;let r=t.results[n][0].transcript.split(" ");var o;console.log(r),console.log(t.results[0][0].confidence),o=r,e(0,m=m.map((t=>(!t.checked&&o.length&&(t=t.word.toLowerCase()===o[0]?{...t,checked:!0,marked:!0}:{...t,checked:!0},o.shift()),t)))),console.log(m)})),x.addEventListener("nomatch",(function(t){console.log("Can't recognise text.")})),x.addEventListener("error",(function(t){console.error(`Error occurred in recognition: ${t.error}`)}))},function(t){s=t.getContext("2d"),t.setAttribute("width",t.parentNode.clientWidth),t.setAttribute("height",t.parentNode.clientHeight),l=t.parentNode.clientWidth,p=t.parentNode.clientHeight},function(){var t;t=this.value,w=""===t?null:+t,e(3,w)},function(t){A[t?"unshift":"push"]((()=>{f=t,e(2,f)}))}]}let B=new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=r}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,D,F,a,{})}}({target:document.getElementById("app")});n.default=B}],[[104,2,1]]]);