document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-mode");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
