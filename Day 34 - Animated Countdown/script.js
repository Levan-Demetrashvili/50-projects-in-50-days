'use strict';

const replayBtn = document.getElementById('replay');
const counterEl = document.querySelector('.counter');
const finalEl = document.querySelector('.final');
const numbers = document.querySelectorAll('.numbers span');

function runCountdown() {
  counterEl.classList.remove('hidden');
  finalEl.classList.remove('show');
  numbers.forEach(function (number, i) {
    number.className = '';
    setTimeout(() => number.classList.add('in'), i * 1000);

    number.addEventListener('animationend', function () {
      if (number.textContent === '0') {
        counterEl.classList.add('hidden');
        finalEl.classList.add('show');
        return;
      }
      number.classList.replace('in', 'out');
    });
  });
}

runCountdown();

replayBtn.addEventListener('click', runCountdown);
