const form = document.getElementById("contactForm");
const button = form.querySelector("button");
const modal = document.getElementById("modal");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Mostrar spinner
  button.classList.add("loading");
  button.disabled = true;

  // Simular envío
  setTimeout(() => {
    button.classList.remove("loading");
    button.disabled = false;
    form.reset();

    // Mostrar modal
    modal.style.display = "flex";

    // Ocultar modal automáticamente
    setTimeout(() => {
      modal.style.display = "none";
    }, 3000);
  }, 2000);
});
