const btn = document.querySelector("button");
const input = document.querySelector(".search");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  container.classList.toggle("active");
  input.focus();
});
