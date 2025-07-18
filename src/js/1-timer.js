import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import '../css/styles.css';

const startBtn = document.querySelector('[data-start]');
const dateInput = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;
let userSelectedDate = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onChange(selectedDates) {    // Реакція одразу після вибору
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      iziToast.warning({
        title: 'Увага',
        message: 'Будь ласка, обери дату в майбутньому.',
        position: 'topRight',
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateInput, options);

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  dateInput.disabled = true;

  timerId = setInterval(() => {
    const diff = userSelectedDate - Date.now();

    if (diff <= 0) {
      clearInterval(timerId);
      updateTimerDisplay(0);
      iziToast.success({
        title: 'Готово!',
        message: 'Відлік завершено!',
        position: 'topRight',
      });
      dateInput.disabled = false;
      startBtn.disabled = true;
      return;
    }

    updateTimerDisplay(diff);
  }, 1000);
});

function updateTimerDisplay(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}
