'use strict';

const image = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

image.addEventListener('dragstart', function () {
  image.className += ' hold';
  setTimeout(() => (image.className = 'invisible'), 0);
});
image.addEventListener('dragend', function () {
  image.className = 'fill';
});

boxes.forEach(box => {
  box.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  box.addEventListener('dragenter', function () {
    image.className = 'fill';
    box.append(image);
  });

  box.addEventListener('drop', function () {
    box.className = 'empty';
    box.append(image);
  });
});
