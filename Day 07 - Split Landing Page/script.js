const ps = document.querySelector(".ps-container");
const xbox = document.querySelector(".xbox-container");

ps.addEventListener("mouseenter", () => ps.classList.add("active"));
ps.addEventListener("mouseleave", () => ps.classList.remove("active"));

xbox.addEventListener("mouseenter", () => xbox.classList.add("active"));
xbox.addEventListener("mouseleave", () => xbox.classList.remove("active"));
