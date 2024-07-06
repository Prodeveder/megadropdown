const navMenu = document.querySelector("#nav-menu"),
  toggleMenu = document.querySelector("#toggle-menu"),
  closeMenu = document.querySelector("#close-menu"),
  dropdowns = document.querySelectorAll(".dropdown");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show__menu");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show__menu");
});
