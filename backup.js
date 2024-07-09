let slideIndex = 0;

const showSlides = () => {
  const slides = document.querySelectorAll(".header__items");

  slides.forEach((element) => {
    element.style.display = "none";
  });
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
};

showSlides();

// Next/previous controls
function plusSlides(n) {
  console.log("Change SLides");
}
