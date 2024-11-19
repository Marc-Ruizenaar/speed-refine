document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinksContainer = document.querySelector(".nav-links-container");

  hamburger.addEventListener("click", ()=> {
    navLinksContainer.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
});