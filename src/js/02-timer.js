import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const daysElem = document.querySelector('.value[data-days]');
const hoursElem = document.querySelector('.value[data-hours]');
const minutesElem = document.querySelector('.value[data-minutes]');
const secondsElem = document.querySelector('.value[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
let diffDates;
let timerId;

btnStart.addEventListener('click', () => {
  renderRemainTime();

  timerId = setInterval(() => {
    if (diffDates <= 1000) {
      clearInterval(timerId);
      timerId = null;
      return Notiflix.Notify.success('Congrats there is your date');
    }

    diffDates -= 1000;
    renderRemainTime();
  }, 1000);

  btnStart.disabled = true;
});

function renderRemainTime() {
  const { days, hours, minutes, seconds } = convertMs(diffDates);

  daysElem.innerText = addLeadingZero(days);
  hoursElem.innerText = addLeadingZero(hours);
  minutesElem.innerText = addLeadingZero(minutes);
  secondsElem.innerText = addLeadingZero(seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (timerId) {
      return Notiflix.Notify.failure('There are still remaining time');
    }

    const dateNow = new Date();
    const [date] = selectedDates;

    if (dateNow > date) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    diffDates = date - dateNow;

    btnStart.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
