const header = document.getElementById('header');
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const profile = document.getElementById('profile');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(() => {
  header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    alt="laptop-image"
  />`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  paragraph.innerHTML = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis `;
  profile.innerHTML = `<img class="animated-bg" src="https://randomuser.me/api/portraits/men/45.jpg" alt="author-image" />`;
  nameEl.innerHTML = 'John Doe ';
  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach(item => item.classList.remove('animated-bg'));
  animated_bg_texts.forEach(item => item.classList.remove('animated-bg-text'));
}, 2500);
