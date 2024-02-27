'use strict';

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const clearBtn = document.getElementById('clear');
const sizeEl = document.getElementById('size');
const colorInput = document.getElementById('color');

const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
let size = 10;
let color = 'white';
let x, y;
let isPressed = false;

colorInput.addEventListener('change', function () {
  color = colorInput.value;
});

decreaseBtn.addEventListener('click', function () {
  size = size === 5 ? size : (size -= 5);
  sizeEl.textContent = size;
});

increaseBtn.addEventListener('click', function () {
  size = size === 50 ? size : (size += 5);
  sizeEl.textContent = size;
});

clearBtn.addEventListener('click', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', function (e) {
  isPressed = false;
  x = null;
  y = null;
});

canvas.addEventListener('mousemove', function (e) {
  if (!isPressed) return;
  const x2 = e.offsetX;
  const y2 = e.offsetY;
  drawCircle(x, y);
  drawLine(x, y, x2, y2);
  x = x2;
  y = y2;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
