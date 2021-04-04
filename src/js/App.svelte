<style>
    .text {
        padding-top: 40%;
    }
    .checked + span:not(.checked) {
        background: grey;
        animation: blink 1s linear infinite;
    }
    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
</style>

<div class="container mx-auto h-screen flex flex-wrap">
    {#if !audioCtx}
        <button class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 px-4 py-2 text-white rounded-lg" on:click={start}>Начать</button>
    {:else}
        <div class="relative w-full h-1/6 flex-initial bg-gray-500 text-white">
            <canvas use:canvas></canvas>
            <div class="absolute top-0 right-0 p-2">
                <input type="range" min="0" max="200" bind:value={sensivity} step="100">
            </div>
        </div>
        <div class="text w-full h-5/6 flex-initial flex-wrap overflow-y-auto xl:p-8 bg-gray-100 text-2xl xl:text-6xl" bind:this={text}>
            {#each wordsArr as item}
                <span class="relative inline-block mr-1 mb-1 py-3 px-5 xl:px-10 rounded-3xl leading-none xl:leading-normal transition-all duration-300" class:checked={item.checked} class:bg-red-300={item.marked}>{item.word}</span>
            {/each}
        </div>
    {/if}
</div>

<script>
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    const data = 'Повседневная практика показывает, что рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Товарищи! консультация с широким активом играет важную роль в формировании модели развития. Повседневная практика показывает, что консультация с широким активом требуют от нас анализа новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание дальнейших направлений развития. Не следует, однако забывать, что укрепление и развитие структуры играет важную роль в формировании систем массового участия.';
    const dataArr = data.split(' ');
    let wordsArr = dataArr.map(item => {
        return {
            word: item.replace(/[^а-я\d\s]+/gi, ""),
            checked: false,
            marked: false
        }
    });

    let audioCtx;
    let analyser;
    let source;
    let text;
    let canvasCtx;
    let WIDTH;
    let HEIGHT;
    let drawVisual;
    let bufferLengthAlt;
    let dataArrayAlt;
    let volume;
    let sensivity = 0;

    let grammar;
    let recognition;
    let speechRecognitionList;

    function start() {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();

        navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        })
        .then(function(stream) {
            source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);

            visualize();

            recognition.start();
        })
        .catch(function(err) {
            console.error(err);
        });

        grammar = '#JSGF V1.0; grammar words; public <word> = ' + dataArr.join(' | ') + ' ;';

        recognition = new SpeechRecognition();
        // speechRecognitionList = new SpeechGrammarList();
        // speechRecognitionList.addFromString(grammar, 1);

        // recognition.grammars = speechRecognitionList;
        recognition.lang = 'ru-RU';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.addEventListener('start', function() {
            console.log('start');
        });
        recognition.addEventListener('end', function() {
            console.log('end');
        });
        recognition.addEventListener('audiostart', function() {
            console.log('audio start');
        });
        recognition.addEventListener('audioend', function() {
            console.log('audio end');
        });
        recognition.addEventListener('soundstart', function() {
            console.log('sound start');
        });
        recognition.addEventListener('soundend', function() {
            console.log('sound end');
        });
        recognition.addEventListener('speechstart', function() {
            console.log('speech start');
        });
        recognition.addEventListener('speechend', function() {
            console.log('speech end');
        });
        recognition.addEventListener('result', function(event) {
            console.log('result');

            for (var i = event.resultIndex; i < event.results.length; ++i) {
                let curWordsStr = event.results[i][0].transcript;
                if (curWordsStr.charAt(0) === ' ') {
                    curWordsStr = curWordsStr.substring(1);
                }
                let curWords = curWordsStr.split(' ');
                if (event.results[i].isFinal) {
                    setCheckedWords(curWords);
                } else {
                    let confidence = event.results[i][0].confidence; 
                    if (confidence > 0.85) {
                        highlightWords(curWords);
                    }
                }
            }
            
        });
        
        recognition.addEventListener('nomatch', function(event) {
            console.log("Can't recognise text.");
        });
        recognition.addEventListener('error', function(event) {
            console.error(`Error occurred in recognition: ${event.error}`);
        });
    }

    function highlightWords(arr) {
        wordsArr = wordsArr.map(item => {
            if (!item.checked && arr.length) {
                if (item.word.toLowerCase() === arr[0]) {
                    item = {...item, marked: true};
                }
                arr.shift();
            }
            return item;
        });
    }

    function setCheckedWords(arr) {
        wordsArr = wordsArr.map(item => {
            if (!item.checked && arr.length) {
                if (item.word.toLowerCase() === arr[0]) {
                    item = {...item, checked: true, marked: true};
                } else {
                    item = {...item, checked: true};
                }
                arr.shift();
            }
            return item;
        });
    }

    function canvas(node) {
        canvasCtx = node.getContext('2d');
        node.setAttribute('width', node.parentNode.clientWidth);
        node.setAttribute('height', node.parentNode.clientHeight);

        WIDTH = node.parentNode.clientWidth;
        HEIGHT = node.parentNode.clientHeight;
    }

    function visualize() {
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