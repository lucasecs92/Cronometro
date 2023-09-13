const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval = ""; 
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false; 

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval( () => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }  

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

// Sobre essa variável interval, está como estado global, pois consigo mexer em outras funções dentro do código.

// Comecei modificando meu intervalo para um setInterval, ele que vai determinar a mudança do tempo. Colocando ele nesse exemplo para executar a cada 10 milissegundos, suficiente para poder modificar os milissegundos instantaneamente, mas pode utilizar os segundos e minutos tb se precisar.

// Esse if(!isPaused) serve para verificar se não está pausado
// Como vai funcionar em loop, dentro dele foi adicionado o valor de 10 milissegundos, depois vou verificar se o milissegundos é igual a 1000 com if(milliseconds === 1000) e vou incrementar um segundo (seconds++) e ai zero os milissegundos (milliseconds = 0)
// Depois outra checagem, se segundos é igual a 60. if(seconds === 60) Fazendo assim os minutos ganharem mais minutos (minutes++) e os segundos resetam voltando para 0. (seconds = 0)

// Agora trocando o valor dos minutos, segundos e millisegundos utilizando o textContent

// Criando uma função auxiliar para formatar o tempo, para a quantidade de 0 que deve aparecer no crônometro. (function formatTime(time))
// ela vai receber um tempo e vai retornar o time se ele for menor que 10, que seri a o zero auxiliar que vou precisar retornar na frente, e não o time mesmo.
// Depois foi acrescentado e executado o formatTime em minutos e segundos (formatTime(minutes) formatTime(seconds))

// Também foi criado uma função auxiliar para formatar os milissegundos, que vai retornar se o tempo for menor que 100 e vou adicionar os 0 que faltam p os milissegundos.

// E no fim foi feito as funções pauseTimer, resumeTimer e resetTimer para fazer os botões aparecerem e desaparecerem no momento certo. 