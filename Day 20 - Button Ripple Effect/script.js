const btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
  const circle = `<span class='circle' style='top: ${e.offsetY}px; left:${e.offsetX}px'></span>`;
  btn.insertAdjacentHTML('beforeend', circle);

  setTimeout(() => btn.lastElementChild.remove(), 500);
});
