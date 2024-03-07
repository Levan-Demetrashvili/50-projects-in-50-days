'use strict';

const textEl = document.querySelector('h1');
const speedInput = document.getElementById('speed');
const text = 'We Love Programming!';

let index = 0;
let speed = 300 / speedInput.value;

speedInput.addEventListener('input', function () {
  speed = 300 / speedInput.value;
  console.log(speed);
});

const createText = function () {
  textEl.textContent += text[index];
  index++;

  if (index === text.length) {
    index = 0;
    textEl.textContent = '';
  }

  setTimeout(createText, speed);
};

createText();
