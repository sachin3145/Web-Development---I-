let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  }
  const offset = -slideIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function changeSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
}


const dotsContainer = document.querySelector(".dots");
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
}


showSlide(slideIndex);


setInterval(() => {
  changeSlide(1);
}, 3000);
