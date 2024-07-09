let slideIndex = 0;
let duration = 6000;
let slideInterval;

function initSlides() {
  showSlides(slideIndex);
  slideInterval = setInterval(() => {
    showSlides((slideIndex += 1));
  }, duration);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".header__items");
  let dots = document.querySelectorAll(".dot");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
  slideInterval = setInterval(() => {
    showSlides((slideIndex += 1));
  }, duration);
}

function currentSlide(n) {
  // Active Controls
  clearInterval(slideInterval);
  showSlides((slideIndex = n - 1));
  slideInterval = setInterval(() => {
    showSlides((slideIndex += 1));
  }, duration);
}

function addDotListeners() {
  // Add the Dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide(index + 1);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSlides();
  addDotListeners();
});
