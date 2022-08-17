const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId;

btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColor() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);

  btnStart.disabled = true;
  btnStop.disabled = false;
}

function stopColor() {
  clearInterval(timerId);

  btnStop.disabled = true;
  btnStart.disabled = false;
}

btnStart.addEventListener('click', startColor);
btnStop.addEventListener('click', stopColor);
