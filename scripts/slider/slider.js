// slider.js

const sliderImages = document.querySelectorAll(".slide");
const sliderSection = document.querySelector(".slider-section");
const arrowPrev = document.getElementById("prev-arrow");
const arrowNext = document.getElementById("next-arrow");

const sliderArrow = document.querySelectorAll(".arrow");

const bulletsContainer = document.querySelector(".slider-bullets");

let currentIndex = 0;
let slideInterval;

export const sliderSwipe = () => {
  const hideAllSlides = () => {
    sliderImages.forEach((image) => {
      image.classList.add("hideElement");
      image.style.display = "none";
    });
  };

  const createBullet = (index) => {
    const bullet = document.createElement("span");
    bullet.classList.add("bullet");
    bullet.addEventListener("click", () => goToSlide(index));
    bulletsContainer.appendChild(bullet);
    return bullet;
  };

  const createBullets = () => {
    sliderImages.forEach((_, index) => {
      createBullet(index);
    });
    updateBullets();
  };

  const init = () => {
    hideAllSlides();
    sliderImages[0].style.display = "block";
    createBullets();
  };

  const updateBullets = () => {
    const bullets = document.querySelectorAll(".bullet");
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("active", index === currentIndex);
    });
  };

  const goToSlide = (index) => {
    hideAllSlides();
    sliderImages[index].style.display = "block";
    currentIndex = index;

    updateBullets();
  };

  arrowPrev.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    goToSlide(currentIndex);
  });

  arrowNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    goToSlide(currentIndex);
  });

  const startAutoSlide = (duration) => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderImages.length;
      goToSlide(currentIndex);
    }, duration);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval);
  };

  init();

  sliderSection.addEventListener("mousemove", stopAutoSlide);
  // sliderSection.addEventListener("mouseleave", () => startAutoSlide(2000));
  // startAutoSlide(2000);
};
