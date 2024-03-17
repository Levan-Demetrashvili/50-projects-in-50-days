'use strict';

const btn = document.querySelector('.magic-btn');
const boxesContainer = document.querySelector('.boxes');

const BOXES_NUMBER = 16;

let x, y;
for (let i = 0; i < BOXES_NUMBER; i++) {
  const box = document.createElement('div');
  box.classList.add('box');

  x = -125 * (i % 4);
  y = i % 4 === 0 ? (i / 4) * -125 : y;
  box.style.backgroundPosition = `${x}px ${y}px`;
  boxesContainer.appendChild(box);
}

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));
