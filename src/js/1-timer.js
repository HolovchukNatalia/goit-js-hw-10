import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cancel from '../img/cancel.svg';
import checkmark from '../img/checkmark.svg';

const inputTimer = document.querySelector('#datetime-picker');
const startBtnTimer = document.querySelector('[data-start]');
startBtnTimer.setAttribute('disabled', true);
const timerBox = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate;

const iziToastOptions = {
  titleColor: '#fff',
  titleSize: '16px',
  messageColor: '#fff',
  messageSize: '16px',
  theme: 'dark',
  closeOnClick: true,
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'fadeOutRight',
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();
    if (userSelectedDate < Date.now()) {
      iziToast.show({
        ...iziToastOptions,
        title: 'Error',
        message: 'Please choose a date in the future',
        color: '#DE0000',
        iconUrl: cancel,
      });
      startBtnTimer.setAttribute('disabled', true);
    } else {
      iziToast.show({
        ...iziToastOptions,
        title: 'Ok',
        message: 'Your timer is ready to run',
        color: '#00C635',
        iconUrl: checkmark,
      });
      startBtnTimer.removeAttribute('disabled');
    }
  },
};

flatpickr(inputTimer, options);

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

function addLeadingZero(time) {
  return {
    days: String(time.days).padStart(2, '0'),
    hours: String(time.hours).padStart(2, '0'),
    minutes: String(time.minutes).padStart(2, '0'),
    seconds: String(time.seconds).padStart(2, '0'),
  };
}

function updateTimer(time, htmlObj) {
  Object.keys(htmlObj).forEach(key => {
    htmlObj[key].textContent = time[key];
  });
}

startBtnTimer.addEventListener('click', () => {
  if (userSelectedDate <= Date.now()) {
    iziToast.show({
      ...iziToastOptions,
      title: 'Error',
      message: 'Please choose a future date to start the timer.',
      color: '#DE0000',
      iconUrl: cancel,
    });
    return;
  }

  let intervalID = startTimer();

  function startTimer() {
    return setInterval(() => {
      let differenceTime = userSelectedDate - Date.now();
      let timer = convertMs(differenceTime);

      if (differenceTime <= 0) {
        clearInterval(intervalID);

        iziToast.show({
          message: 'Time is up! Choose a new timer',
          color: '#03a14d',
          titleColor: '#fff',
          titleSize: '16px',
          messageColor: '#fff',
          messageSize: '16px',
          iconUrl: checkmark,
          position: 'topRight',
          transitionIn: 'bounceInLeft',
          closeOnClick: true,
        });

        inputTimer.removeAttribute('disabled');
        startBtnTimer.removeAttribute('disabled');
        return;
      }

      let formatedTimer = addLeadingZero(timer);
      updateTimer(formatedTimer, timerBox);
    }, 1000);
  }

  startBtnTimer.setAttribute('disabled', true);
  inputTimer.setAttribute('disabled', true);
});
