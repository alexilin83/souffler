import './App.svelte.css.proxy.js';
/* src\js\App.svelte generated by Svelte v3.35.0 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";

function create_fragment(ctx) {
	let div2;
	let div0;
	let canvas_1;
	let t0;
	let div1;

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			canvas_1 = element("canvas");
			t0 = space();
			div1 = element("div");
			div1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas laudantium quaerat voluptas, laborum maxime dolore nostrum perferendis quam obcaecati aspernatur doloribus facere tempore dolorum doloremque. Quibusdam est sapiente, temporibus nam veniam hic enim facilis soluta! Nulla laudantium dolores non soluta eveniet! Beatae quidem, quis, in reiciendis id fuga quo esse, iure ullam dolorum ipsum fugit doloremque modi ab? Commodi accusamus totam maxime culpa natus ullam sit dolorum voluptatem ut. Adipisci, voluptates nobis dignissimos eos, nostrum similique non blanditiis alias facilis cumque ducimus neque recusandae reiciendis maxime possimus earum quia obcaecati quidem accusantium et ipsam. Natus sunt totam adipisci placeat iusto voluptate saepe cumque incidunt unde ratione temporibus nobis accusantium, animi labore mollitia modi quaerat harum inventore ullam ab, facilis consectetur, enim commodi! Doloribus nisi modi dolore voluptatibus in recusandae unde dignissimos qui neque dolorem accusamus tempore sint a, placeat nihil ipsum accusantium voluptatem enim quas, incidunt itaque quia adipisci commodi! Totam tempora autem, vitae corrupti enim ad laborum magnam. Doloribus qui, iste nobis facere omnis earum nisi quod. Tempore sequi, alias ipsum pariatur placeat, corporis sint adipisci sunt eveniet explicabo quibusdam. Neque, possimus amet similique mollitia, officia modi distinctio quae, quaerat dolore quo eligendi porro dolores inventore doloremque hic vero. Pariatur veniam ipsum iste dolorem perspiciatis eos ea, vel eaque necessitatibus sunt itaque amet ratione esse saepe perferendis neque dolor odio fugit dolores optio. Libero, reiciendis quia dolor distinctio velit earum! Autem, reprehenderit incidunt harum eius neque accusamus quibusdam, alias quidem excepturi libero saepe voluptatem est nostrum quasi asperiores doloribus in sapiente cumque molestiae? Inventore accusantium amet deserunt veritatis ducimus incidunt beatae tempora quae ipsum repellat voluptatem perspiciatis officia enim earum explicabo necessitatibus, adipisci natus reprehenderit harum nihil! Natus doloribus similique unde possimus quidem voluptate ipsam, expedita qui, nihil vitae cumque non at saepe cum. Nemo iste laudantium nostrum?";
			attr(div0, "class", "bars svelte-1ugpmgo");
			attr(div1, "class", "text svelte-1ugpmgo");
			attr(div2, "class", "container mx-auto py-10");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, canvas_1);
			/*canvas_1_binding*/ ctx[3](canvas_1);
			append(div2, t0);
			append(div2, div1);
			/*div1_binding*/ ctx[4](div1);
			/*div2_binding*/ ctx[5](div2);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div2);
			/*canvas_1_binding*/ ctx[3](null);
			/*div1_binding*/ ctx[4](null);
			/*div2_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	let analyser = audioCtx.createAnalyser();
	let source;
	let container;
	let text;
	let canvas;
	let canvasCtx;
	let WIDTH;
	let HEIGHT;
	let intendetWidth;
	let drawVisual;
	let bufferLengthAlt;
	let dataArrayAlt;
	let volume;

	onMount(() => {
		canvasCtx = canvas.getContext("2d");
		intendetWidth = container.clientWidth;
		canvas.setAttribute("width", intendetWidth);
	});

	navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(function (stream) {
		source = audioCtx.createMediaStreamSource(stream);
		source.connect(analyser);
		visualize();
	}).catch(function (err) {
		console.error(err);
	});

	function visualize() {
		WIDTH = canvas.width;
		HEIGHT = canvas.height;
		analyser.fftSize = 256;
		analyser.minDecibels = -90;
		analyser.maxDecibels = -10;
		analyser.smoothingTimeConstant = 0.85;
		bufferLengthAlt = analyser.frequencyBinCount;
		dataArrayAlt = new Uint8Array(bufferLengthAlt);
		canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
		draw();
	}

	function draw() {
		drawVisual = requestAnimationFrame(draw);
		analyser.getByteFrequencyData(dataArrayAlt);
		canvasCtx.fillStyle = "rgb(0, 0, 0)";
		canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
		let barWidth = WIDTH / bufferLengthAlt * 2.5;
		let barHeight;
		let x = 0;

		for (let i = 0; i < bufferLengthAlt; i++) {
			barHeight = dataArrayAlt[i];
			canvasCtx.fillStyle = `rgb(127, ${barHeight + 100}, 0)`;
			canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
			x += barWidth + 1;
		}

		volume = Math.max(...dataArrayAlt) / 256;

		if (volume > 0.4) {
			$$invalidate(1, text.scrollTop += 1, text);
		}
	}

	function canvas_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			canvas = $$value;
			$$invalidate(2, canvas);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			text = $$value;
			$$invalidate(1, text);
		});
	}

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			container = $$value;
			$$invalidate(0, container);
		});
	}

	return [container, text, canvas, canvas_1_binding, div1_binding, div2_binding];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;