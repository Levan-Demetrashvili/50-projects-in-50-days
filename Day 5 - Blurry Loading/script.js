const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;
let blur = 30;
const int = setInterval(() => {
  load++;
  blur -= 0.3;
  bg.style.filter = `blur(${blur}px)`;
  loadingText.style.opacity = 1 - load / 100;
  loadingText.textContent = `${load}%`;
  if (load > 99) clearInterval(int);
}, 30);
