'use strict';

const btn = document.getElementById('btn');
const toasts = document.querySelector('.toasts');

const orders = ['One', 'Two', 'Three', 'Four'];
const colors = ['red', 'green', 'rebeccapurple'];

const randomNum = (start, end) => Math.trunc(Math.random() * (end - start + 1) + start);

btn.addEventListener('click', function () {
  const message = document.createElement('div');
  console.log(message);
  message.classList.add('message');
  message.style.color = colors[randomNum(0, colors.length - 1)];
  message.textContent = `Message  ${orders[randomNum(0, orders.length - 1)]}`;
  toasts.appendChild(message);

  setTimeout(() => message.remove(), 3000);
});
