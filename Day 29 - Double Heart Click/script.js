'use strict';

const counterEl = document.querySelector('.counter');
const image = document.querySelector('.image');

let counter = 0;
let clickTime = 0;

function addHeart(e) {
  counterEl.textContent = ++counter;
  const x = e.clientX - image.offsetLeft;
  const y = e.clientY - image.offsetTop;

  const heart = document.createElement('i');
  heart.className = 'fas fa-heart';

  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;
  image.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
}

image.addEventListener('click', function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      addHeart(e);
      clickTime = 0;
    } else clickTime = new Date().getTime();
  }
});
