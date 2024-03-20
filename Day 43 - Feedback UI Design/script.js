'use strict';

const panel = document.querySelector('.panel-container');
const ratingsContainer = document.querySelector('.ratings');
const sendBtn = document.getElementById('review');

let ratingText = 'Satisfied';

ratingsContainer.addEventListener('click', function (e) {
  const ratingEl = e.target.closest('.rating');
  if (!ratingEl) return;

  ratingText = ratingEl.querySelector('small').textContent;

  [...ratingsContainer.children].forEach(rating => {
    if (rating === ratingEl) rating.classList.add('active');
    else rating.classList.remove('active');
  });
});

sendBtn.addEventListener('click', function () {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${ratingText}</strong>
  <p> We'll use your feedback to improve our customer support </p>
  `;
});
