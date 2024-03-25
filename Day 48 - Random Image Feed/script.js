'use strict';
const imagesContainer = document.querySelector('.images');
const imgURL = 'https://source.unsplash.com/random/';

const quantity = 15;

for (let i = 0; i < quantity; i++) {
  const img = document.createElement('img');
  img.src = imgURL + getRandomSize();
  img.alt = 'img';
  imagesContainer.appendChild(img);
}

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

function getRandomSize() {
  return `${getRandomNumber(300, 310)}x${getRandomNumber(300, 310)}`;
}
