<!-- scripts.js -->
window.addEventListener('scroll', () => {
  const prog = document.getElementById('progress-bar');
  const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  prog.style.width = percent + '%';
});
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme', 'light');
});
// Endorsement carousel auto-scroll
const endorse = document.getElementById('endorsementCarousel'); let idx = 0;
setInterval(() => {
  if (endorse) {
    endorse.scrollTo({ left: idx * endorse.offsetWidth, behavior: 'smooth' });
    idx = (idx + 1) % endorse.children.length;
  }
}, 4000);
AOS.init({ once: true, duration: 800 });
