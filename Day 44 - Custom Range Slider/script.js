'use strict';

const labelSlider = document.querySelector('.container label');
const slider = document.getElementById('slider');

const sliderWidth = slider.getBoundingClientRect().width;

slider.addEventListener('input', function () {
  const sliderValue = +slider.value;
  labelSlider.textContent = sliderValue;

  labelSlider.style.left = `${(sliderValue * sliderWidth) / 100}px`;
});
