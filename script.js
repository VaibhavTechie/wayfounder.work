// script.js - Theme Toggle (Light/Dark)

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#111111";
  } else {
    document.body.style.backgroundColor = "#0f0f0f";
    document.body.style.color = "#eaeaea";
  }
});
