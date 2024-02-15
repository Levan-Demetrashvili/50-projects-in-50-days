const btnsCont = document.querySelector('.btns');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const steps = [...document.querySelectorAll('.numbers')];
const progress = document.querySelector('.progress');

nextBtn.addEventListener('click', function () {
  const firstNotActived = steps.find(el => !el.classList.contains('active'));
  firstNotActived.classList.add('active');
  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + '%';

  //* Add disabled attributes
  prevBtn.disabled = false;
  if (steps.every(el => el.classList.contains('active'))) {
    nextBtn.disabled = true;
  }
});

prevBtn.addEventListener('click', function () {
  const LastActived = steps.findLast(el => el.classList.contains('active'));
  LastActived.classList.remove('active');
  progress.style.width = parseFloat(progress.style.width) - 33 + '%';

  //* Add disabled attributes
  nextBtn.disabled = false;
  if (LastActived.textContent === '2') {
    prevBtn.disabled = true;
  }
});
