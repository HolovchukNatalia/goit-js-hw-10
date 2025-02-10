import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(e.target.delay.value);
  const state = e.target.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: ' Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        color: '#00C635',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: ' Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: '#DE0000',
      });
    });
});
