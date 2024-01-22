// slider.js

export const sliderSwipe = () => {
  const sliderImages = document.querySelectorAll(".slide");
  const arrowPrev = document.getElementById("prev-arrow");
  const arrowNext = document.getElementById("next-arrow");
  const bulletsContainer = document.querySelector(".slider-bullets");

  let currentIndex = 0;
  let slideInterval;

  const hideAllSlides = () => {
    sliderImages.forEach((image) => (image.style.display = "none"));
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
  // startAutoSlide(2000);
};
