import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(number, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomBoolean = Math.random() > 0.3;

      if (randomBoolean) {
        resolve({ number, delay });
      } else {
        reject({ number, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  const firstDelay = +formData.get('delay');
  const stepDelay = +formData.get('step');
  const amount = +formData.get('amount');

  for (let i = 0; i < amount; i++) {
    const endDelay = firstDelay + i * stepDelay;
    const number = i + 1;

    createPromise(number, endDelay)
      .then(({ number, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${number} in ${delay}ms`);
      })
      .catch(({ number, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${number} in ${delay}ms`);
      });
  }
});
