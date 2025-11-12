
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const body = document.body; 


toggle.addEventListener("click", function () {
  if (nav.ariaHidden === "true") {

    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
    body.classList.add("noscroll");
  } else {

    nav.ariaHidden = "true";
    toggle.ariaExpanded = "false";
    body.classList.remove("noscroll"); 
  }
});
