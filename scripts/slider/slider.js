const sliderImages = document.querySelectorAll(".slide");
const arrowPrev = document.getElementById("prev-arrow");
const arrowNext = document.getElementById("next-arrow");

let current = 0;

const reset = () => {
  for (const image of sliderImages) {
    image.style.display = "none";
  }
};

const init = () => {
  reset();
  sliderImages[0].style.display = "block";
};

const slidePrev = () => {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
};

arrowPrev.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slidePrev();
});

const slideRight = () => {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
};

arrowNext.addEventListener("click", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

init();
