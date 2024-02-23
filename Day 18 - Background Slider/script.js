'use strict';

const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

let curSlide = 0;
const maxSlide = slides.length;

function goToSlide(slide) {
  slides.forEach((s, i) => {
    if (i === slide) {
      s.classList.add('active');
      document.body.style.backgroundImage = window.getComputedStyle(s).backgroundImage;
    } else {
      s.classList.remove('active');
    }
  });
}

nextBtn.addEventListener('click', function () {
  curSlide = curSlide === maxSlide - 1 ? 0 : ++curSlide;
  goToSlide(curSlide);
});

prevBtn.addEventListener('click', function () {
  curSlide = curSlide === 0 ? maxSlide - 1 : --curSlide;
  goToSlide(curSlide);
});
