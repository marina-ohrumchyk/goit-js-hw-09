const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId = null;

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  timerId = setInterval(getRandomHexColor, 1000);
  startButton.setAttribute('disabled', true);
}

function onStopButtonClick() {
  startButton.removeAttribute('disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
