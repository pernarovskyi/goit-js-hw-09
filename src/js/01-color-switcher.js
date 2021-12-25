refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.stopBtn.setAttribute('disabled', '');

refs.startBtn.addEventListener('click', e => {
  e.target.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', e => {
  clearInterval(timerId);

  e.target.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
