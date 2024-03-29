'use strict';

const r = document.querySelector(':root');
const conic = document.getElementById('conic');
const timerEl = document.getElementById('timer');
const ball = document.getElementById('ball')
const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')

let degrees = 0;
let isPlaying = false;
let countdown = 60;
let timerInterval;


function reset() {
  isPlaying = false;
  countdown = 60;
  degrees = 0;
  r.style.setProperty('--degrees', degrees + 'deg')
 
  startBtn.classList.remove('active') 
  startBtn.children[0].classList.add('fa-play',)
  startBtn.children[0].classList.remove('fa-pause')

  timerEl.textContent = '01:00'
  clearInterval(timerInterval);
}


startBtn.addEventListener('click', function () {
  isPlaying = !isPlaying;

  startBtn.classList.toggle('active') 
  startBtn.children[0].classList.toggle('fa-play',)
  startBtn.children[0].classList.toggle('fa-pause')
  if (!isPlaying)  {
    clearInterval(timerInterval) 
    return 
  } 
  timerInterval = setInterval(() => {
    countdown--;
    // border style
    degrees += 360 / 60
    r.style.setProperty('--degrees', degrees + 'deg')
    // timer
    const minutes = String(Math.trunc(countdown / 60)).padStart(2,0)
    const seconds = String(countdown % 60).padStart(2,0)
    timerEl.textContent = `${minutes}:${seconds}`

    // while countdown is 0
    if (countdown === 0) {
      reset()
    }
  },1000)
})

resetBtn.addEventListener('click',reset)

