const btnElement = document.querySelector('button');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

btnElement.addEventListener('click', onBtn);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onBtn(evt) {
  evt.preventDefault();
  for (let position = 1; position <= amount.value; position += 1) {
    createPromise(position, delay.value)
      .then(({ position, delay }) => {
        console.log(
          `:белая_галочка: Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`:х: Rejected promise ${position} in ${delay}ms`);
      });
    delay.value += step.value;
  }
}
