const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

container.addEventListener("click", function (e) {
  const panel = e.target.closest(".panel");

  if (!panel) return;

  panels.forEach(el => {
    if (el !== panel) el.classList.remove("active");
    else el.classList.add("active");
  });
});
