import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const createPromise = (delay, state) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        state === 'fulfilled' ? resolve(delay) : reject(delay);
      }, delay);
    });
  };

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: '',
        icon: '',
               message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        icon: '',
               message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });

  form.reset();
});
