document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.tarjeta'); // esta clase sí existe en tu HTML

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});