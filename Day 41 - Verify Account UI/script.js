'use strict';

const codes = document.querySelectorAll('.code');
codes.forEach(code => {
  code.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Backspace') setTimeout(() => this.previousElementSibling?.focus(), 0);
    else if (e.key >= 0 && e.key <= 9) {
      code.value = '';
      setTimeout(() => this.nextElementSibling?.focus(), 0);
    }
  });
  // prevent default action
  code.addEventListener('wheel', e => e.preventDefault());
  code.removeEventListener('wheel', e => e.preventDefault());
});
