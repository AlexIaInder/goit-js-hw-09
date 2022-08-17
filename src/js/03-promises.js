import Notiflix from 'notiflix';

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const btnCreate = document.querySelector('button[type="submit"]');

function createPromise(number, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomBoolean = Math.random() > 0.3;

      if (randomBoolean) {
        resolve({ number, delay });
      } else {
        reject({ number, delay });
      }
    }, delay);
  });

  return promise;
}

btnCreate.addEventListener('click', e => {
  e.preventDefault();

  const firstDelay = +delayInput.value;
  const stepDelay = +stepInput.value;
  const amount = +amountInput.value;

  for (let i = 0; i < amount; i++) {
    const endDelay = firstDelay + i * stepDelay;
    const number = i + 1;

    createPromise(number, endDelay)
      .then(({ number, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${number} in ${delay}ms`);
      })
      .catch(({ pos, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${number} in ${delay}ms`);
      });
  }
});
