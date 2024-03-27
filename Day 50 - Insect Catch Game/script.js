'use strict';
const screens = document.querySelectorAll('.screen');
const playBtn = document.getElementById('play');
const selectInsectCont = document.querySelector('.choose-insect');

const gameCont = document.querySelector('.game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let chosenInsect = {};
let secondCount = 0;
let score = 0;

function getRandomPosition() {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;
  const x = Math.random() * (maxWidth - 200) + 100;
  const y = Math.random() * (maxHeight - 200) + 100;
  return { x, y };
}

function timer() {
  setInterval(() => {
    secondCount++;
    const seconds = String(secondCount % 60).padStart(2, 0);
    const minutes = String(Math.trunc(secondCount / 60)).padStart(2, 0);
    timeEl.textContent = `Time: ${minutes}:${seconds}`;
  }, 1000);
}

function createInsect() {
  const { src, alt: name } = chosenInsect;
  const { x, y } = getRandomPosition();
  const deg = Math.random() * 360;

  const insect = document.createElement('div');
  insect.classList.add('game-insect');
  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;

  insect.innerHTML = `<img src="${src}" alt="${name}" />`;
  insect.children[0].style.transform = `rotate(${deg}deg)`;
  gameCont.appendChild(insect);
}

// Move on second screen
playBtn.addEventListener('click', () => screens[0].classList.add('up'));
// Move on third screen
selectInsectCont.addEventListener('click', e => {
  const selectInsect = e.target.closest('.insect');
  if (!selectInsect) return;

  // Get selected insect
  const { src, alt } = selectInsect.querySelector('img');
  chosenInsect = { src, alt };
  // Move on game slide
  screens[1].classList.add('up');

  setTimeout(createInsect, 1000);
  // Start the game
  timer();
});

// When clicked on insect
gameCont.addEventListener('click', e => {
  const insect = e.target.closest('.game-insect');
  if (!insect) return;

  // Create  more insects
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);

  // Disappear insect and  update score value
  insect.classList.add('caught');
  setTimeout(() => insect.remove(), 2000);

  scoreEl.textContent = `Score: ${++score}`;
  if (score === 20) message.classList.add('visible');
});
