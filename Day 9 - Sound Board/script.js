const btnsContainer = document.querySelector('.btns');

let audio;

btnsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('music-box')) return;

  if (audio) audio.pause();

  audio = document.querySelector(`[src="./audio/${e.target.textContent}.mp3"]`);
  audio.currentTime = 0;
  audio.play();
});
