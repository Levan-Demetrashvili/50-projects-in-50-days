const btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => btns[i].closest('div').classList.toggle('active'));
}
