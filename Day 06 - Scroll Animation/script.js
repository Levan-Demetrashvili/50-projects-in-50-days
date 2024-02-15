const boxes = document.querySelectorAll(".box");
const height = (window.innerHeight / 5) * 4;

function revealBoxes(entries) {
  const [entry] = entries;

  boxes.forEach(box => {
    if (box.getBoundingClientRect().top < height) box.classList.add("show");
    else box.classList.remove("show");
  });
}

const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px 500%",
};
const boxesObserver = new IntersectionObserver(revealBoxes, options);

boxes.forEach(box => boxesObserver.observe(box));
