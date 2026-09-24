(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  if (!slides.length) return;

  let current = 0, timer = null;

  function show(n) {
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
  }
  const next = () => show(current + 1);
  const prev = () => show(current - 1);

  function start() { if (!timer) timer = setInterval(next, 5000); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  document.querySelector('.prev').addEventListener('click', () => { stop(); prev(); start(); });
  document.querySelector('.next').addEventListener('click', () => { stop(); next(); start(); });

  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);

  start();
})();