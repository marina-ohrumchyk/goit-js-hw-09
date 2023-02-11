import Notiflix from 'notiflix';

const btnEl = document.querySelector('button');
const DelayEl = document.querySelector("input[name='delay']");
const StepEl = document.querySelector("input[name='step']");
const AmountEl = document.querySelector(" [name='amount']");

btnEl.addEventListener('click', onBtn);

function onBtn(evt) {
  evt.preventDefault();
  const delayFirst = +DelayEl.value;
  const step = +StepEl.value;
  const amount = +AmountEl.value;
  DelayEl.value = '';
  StepEl.value = '';
  AmountEl.value = '';
  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    let delay = delayFirst + i * step;
    createPromise(position, delay)
       .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
         console.log(`Fulfilled promise ${position} in ${delay}ms`);
       })
       .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
         console.log(`Rejected promise ${position} in ${delay}ms`);
       });
   }
 }

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
