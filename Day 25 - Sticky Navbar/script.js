const nav = document.querySelector('header');
const h1 = document.querySelector('h1');
const h1Height = h1.getBoundingClientRect().height;

function navCallback(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('active');
  else nav.classList.remove('active');
}

const navObserver = new IntersectionObserver(navCallback, {
  root: null,
  threshold: 1,
  rootMargin: `-${h1Height}px 0px 0px 0px`,
});

navObserver.observe(h1);
