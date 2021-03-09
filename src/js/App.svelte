<div class="container mx-auto h-screen flex flex-wrap">
    <div class="relative w-full h-1/6 flex-initial bg-gray-500 text-white" bind:this={panel}>
        <canvas bind:this={canvas}></canvas>
        <div class="absolute top-0 right-0 p-2">
            <input type="range" min="0" max="200" bind:value={sensivity} step="100">
        </div>
    </div>
    <div class="w-full h-5/6 flex-initial overflow-y-auto p-4 xl:p-8 bg-gray-100 text-5xl xl:text-8xl" bind:this={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas laudantium quaerat voluptas, laborum maxime dolore nostrum perferendis quam obcaecati aspernatur doloribus facere tempore dolorum doloremque. Quibusdam est sapiente, temporibus nam veniam hic enim facilis soluta! Nulla laudantium dolores non soluta eveniet! Beatae quidem, quis, in reiciendis id fuga quo esse, iure ullam dolorum ipsum fugit doloremque modi ab? Commodi accusamus totam maxime culpa natus ullam sit dolorum voluptatem ut. Adipisci, voluptates nobis dignissimos eos, nostrum similique non blanditiis alias facilis cumque ducimus neque recusandae reiciendis maxime possimus earum quia obcaecati quidem accusantium et ipsam. Natus sunt totam adipisci placeat iusto voluptate saepe cumque incidunt unde ratione temporibus nobis accusantium, animi labore mollitia modi quaerat harum inventore ullam ab, facilis consectetur, enim commodi! Doloribus nisi modi dolore voluptatibus in recusandae unde dignissimos qui neque dolorem accusamus tempore sint a, placeat nihil ipsum accusantium voluptatem enim quas, incidunt itaque quia adipisci commodi! Totam tempora autem, vitae corrupti enim ad laborum magnam. Doloribus qui, iste nobis facere omnis earum nisi quod. Tempore sequi, alias ipsum pariatur placeat, corporis sint adipisci sunt eveniet explicabo quibusdam. Neque, possimus amet similique mollitia, officia modi distinctio quae, quaerat dolore quo eligendi porro dolores inventore doloremque hic vero. Pariatur veniam ipsum iste dolorem perspiciatis eos ea, vel eaque necessitatibus sunt itaque amet ratione esse saepe perferendis neque dolor odio fugit dolores optio. Libero, reiciendis quia dolor distinctio velit earum! Autem, reprehenderit incidunt harum eius neque accusamus quibusdam, alias quidem excepturi libero saepe voluptatem est nostrum quasi asperiores doloribus in sapiente cumque molestiae? Inventore accusantium amet deserunt veritatis ducimus incidunt beatae tempora quae ipsum repellat voluptatem perspiciatis officia enim earum explicabo necessitatibus, adipisci natus reprehenderit harum nihil! Natus doloribus similique unde possimus quidem voluptate ipsam, expedita qui, nihil vitae cumque non at saepe cum. Nemo iste laudantium nostrum?</div>
</div>

<script>
    import { onMount } from "svelte";

    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let analyser = audioCtx.createAnalyser();
    let source;
    let panel;
    let text;
    let canvas;
    let canvasCtx;
    let WIDTH;
    let HEIGHT;
    let drawVisual;
    let bufferLengthAlt;
    let dataArrayAlt;
    let volume;
    let sensivity = 100;

    onMount(() => {
        canvasCtx = canvas.getContext('2d');
        canvas.setAttribute('width', panel.clientWidth);
        canvas.setAttribute('height', panel.clientHeight);

        navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        })
        .then(function(stream) {
            source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);

            visualize();
        })
        .catch(function(err) {
            console.error(err);
        });
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

        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        let barWidth = (WIDTH / bufferLengthAlt) * 2.5;
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
            text.scrollTop += 1 + (1 * sensivity / 100);
        }
    }

</script>