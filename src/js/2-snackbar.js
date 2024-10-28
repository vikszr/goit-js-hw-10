import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createNotification(delay, state) {
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

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createNotification(delay, state)
    .then(delay => {
      iziToast.show({
        message: `✓ Fulfilled promise in ${delay}ms`,
        messageColor: 'white',
        backgroundColor: '#40CC8C',
        position: 'topRight',
        imageWidth: 200,
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `✗ Rejected promise in ${delay}ms`,
        messageColor: 'white',
        backgroundColor: '#FF5C54',
        position: 'topRight',
        timeout: 3000,
      });
    });

  form.reset();
});
