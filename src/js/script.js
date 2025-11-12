// On récupère les éléments
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

// Quand on clique sur le bouton
toggle.addEventListener("click", function () {
  if (nav.ariaHidden === "true") {
    // Si le menu est fermé → on l’ouvre
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
  } else {
    // Si le menu est ouvert → on le ferme
    nav.ariaHidden = "true";
    toggle.ariaExpanded = "false";
  }
});


