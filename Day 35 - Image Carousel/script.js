'use strict';

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const imagesCont = document.querySelector('.images-cont');

const maxSlide = imagesCont.children.length - 1;
let curSlide = 0;

let interval = setInterval(() => {
  curSlide++;
  goToSlide(curSlide);
}, 2000);

function goToSlide(slide) {
  if (slide > maxSlide) curSlide = 0;
  else if (slide < 0) curSlide = maxSlide;
  imagesCont.style.transform = `translateX(-${curSlide * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    curSlide++;
    goToSlide(curSlide);
  }, 2000);
}

nextBtn.addEventListener('click', function () {
  curSlide++;
  goToSlide(curSlide);
  resetInterval();
});

prevBtn.addEventListener('click', function () {
  curSlide--;
  goToSlide(curSlide);
  resetInterval();
});
