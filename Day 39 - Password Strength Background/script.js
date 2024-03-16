'use strict';

const background = document.querySelector('.background');
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function () {
  const length = this.value.length;
  background.style.filter = `blur(${20 - 2 * length}px)`
})