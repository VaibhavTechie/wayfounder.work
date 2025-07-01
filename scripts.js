document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle").addEventListener("click", () => {
    document.body.style.background = document.body.style.background === 'black' ? 'white' : 'black';
    document.body.style.color = document.body.style.color === 'white' ? 'black' : 'white';
  });
});
