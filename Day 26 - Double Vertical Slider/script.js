const downBtn = document.getElementById('down');
const upBtn = document.getElementById('up');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');

let curSlide = 0;
const maxSlide = leftSlide.children.length - 1;

function slideTo(slide) {
  leftSlide.style.transform = `translateY(${100 * (maxSlide - slide)}vh)`;
  rightSlide.style.transform = `translateY(-${100 * (maxSlide - slide)}vh)`;
}

downBtn.addEventListener('click', function () {
  curSlide === maxSlide ? (curSlide = 0) : curSlide++;
  slideTo(curSlide);
});

upBtn.addEventListener('click', function () {
  curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
  slideTo(curSlide);
});
