const toggle = document.querySelector("#toggle");

toggle.addEventListener("change", function () {
  const mensual = toggle.checked === false;

  document.getElementById("precio-basico").style.display = mensual ? "block" : "none";
  document.getElementById("precio-basico-anual").style.display = mensual ? "none" : "block";

  document.getElementById("precio-intermedio").style.display = mensual ? "block" : "none";
  document.getElementById("precio-intermedio-anual").style.display = mensual ? "none" : "block";

  document.getElementById("precio-premium").style.display = mensual ? "block" : "none";
  document.getElementById("precio-premium-anual").style.display = mensual ? "none" : "block";
});
