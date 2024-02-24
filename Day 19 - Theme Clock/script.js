'use strict';

const modeBtn = document.getElementById('btn');

const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const dayEl = document.querySelector('.day');

const hoursNeedle = document.querySelector('.needle-hours');
const minutesNeedle = document.querySelector('.needle-minutes');
const secondsNeedle = document.querySelector('.needle-seconds');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

modeBtn.addEventListener('click', function () {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) modeBtn.textContent = 'Light mode';
  else modeBtn.textContent = 'Dark mode';
});

let degree = 0;
let totalRotation = 0;

setInterval(() => {
  const date = new Date();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const half = date.getHours() + date.getMinutes() / 100 > 12 ? 'PM' : 'AM';

  degree = (360 / 60) * seconds;

  timeEl.textContent = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)} ${half}`;

  dateEl.innerHTML = `${days[date.getDay()]}, ${months[date.getMonth()]} 
    <span class="day"> ${date.getDate()}</span>`;

  if (seconds === 60) degree = 360;

  secondsNeedle.style.transform = `translate(-50%, -100%) rotate(${degree}deg)`;
  minutesNeedle.style.transform = `translate(-50%, -100%) rotate(${(360 / 3600) * (minutes * 60 + seconds)}deg)`;
  hoursNeedle.style.transform = `translate(-50%, -100%) rotate(${(360 / 12) * (hours % 12) + (30 / 60) * minutes}deg)`;
}, 1000);
