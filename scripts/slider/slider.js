// select elements and store in variables
const sliderImages = document.querySelectorAll(".slide");

const arrowPrev = document.getElementById("prev-arrow");
const arrowNext = document.getElementById("next-arrow");

const bulletsContainer = document.querySelector(".slider-bullets");

let currentIndex = 0;
let slideInterval;

// this function sets slide images hide

function hideAllSlides() {
  for (const image of sliderImages) {
    image.style.display = "none";
  }
}

// // this function creates bullet dots in the slider HTML
function createBullets() {
  sliderImages.forEach((_, index) => {
    const bullet = document.createElement("span");
    bullet.classList.add("bullet");
    bullet.addEventListener("click", () => goToSlide(index));
    bulletsContainer.appendChild(bullet);
  });
  updateBullets();
}

// initialization function to set up the initial state of the slider
function init() {
  hideAllSlides();
  sliderImages[0].style.display = "block"; // show only first slide page at first
  createBullets();
}

function updateBullets() {
  const bullets = document.querySelectorAll(".bullet");
  // loop through each bullet element using forEach

  bullets.forEach((bullet, index) => {
    // use classList.toggle to add or remove the "active" class based on the condition (index === currentIndex)
    bullet.classList.toggle("active", index === currentIndex);
  });
}

// navigate to a specific slide by its index
function goToSlide(index) {
  hideAllSlides();
  sliderImages[index].style.display = "block";
  // update the current index
  currentIndex = index;
  updateBullets();
}

//
arrowPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  console.log(currentIndex);
  goToSlide(currentIndex);
});

arrowNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  goToSlide(currentIndex);
});

function startAutoSlide(duration) {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    goToSlide(currentIndex);
  }, duration);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

init();
startAutoSlide(2000);
