let slideIndex = 0;
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
  slideIndex += step;
  showSlide(slideIndex);
}

// Auto slide
setInterval(() => {
  moveSlide(1);
}, 4000);