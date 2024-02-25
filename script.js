let interval;
let startTime;
let elapsedTime = 0;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const timer = document.getElementById('timer');

startBtn.addEventListener('click', () => {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    elapsedTime = 0;
    timer.textContent = '00:00';
});

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}