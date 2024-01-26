// declare variables
const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
const bulletsContainer = document.querySelector(".slider-bullets");

let durationTime = 7000;
let currentIndex = 0;
let slideInterval;

// create slider function

export const initSlider = () => {
  // hide slide elements that are not currently visible
  const hideAllSlides = () => {
    slides.forEach((slide) => {
      slide.classList.add("hideElement");
      slide.style.display = "none";
    });
  };

  // create each bullet for a specific slide page
  const createBullet = (index) => {
    const bullet = document.createElement("span");
    bullet.classList.add("bullet");
    bullet.addEventListener("click", () => goToSlide(index));
    bulletsContainer.appendChild(bullet);
    return bullet;
  };

  // create bullets for each page
  const createBullets = () => {
    // Iterate over each slide, creating a bullet for each one
    slides.forEach((_, index) => {
      createBullet(index);
    });
    updateBullets();
  };

  // initilize the slider
  const init = () => {
    hideAllSlides();
    // display the first slide only at first
    slides[0].style.display = "block";
    createBullets();
  };

  // Update the visual state of bullets based on the current slide index

  const updateBullets = () => {
    const bullets = document.querySelectorAll(".bullet");
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("active", index === currentIndex);
    });
  };

  // navigate to a specific slide by index

  const goToSlide = (index) => {
    hideAllSlides();
    // display the selected slide
    slides[index].style.display = "block";

    // determine the animation direction based on index

    const directionClass =
      index > currentIndex || index === currentIndex
        ? "slideRightAnime"
        : "slideLeftAnime";

    // apply the animation classes to all slides

    slides.forEach((slide) => {
      slide.classList.remove("slideLeftAnime", "slideRightAnime");
      slide.classList.add(directionClass);
    });
    // update the current index and bullets
    currentIndex = index;
    updateBullets();
  };

  prevArrow.addEventListener("click", () => {
    // Calculate the index of the previous slide
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    // navigate to the previous slide
    goToSlide(currentIndex);
  });

  nextArrow.addEventListener("click", () => {
    // calculate the index of the next slide
    currentIndex = (currentIndex + 1) % slides.length;
    // navigate to the next slide
    goToSlide(currentIndex);
  });

  // start automatic slide transition
  const startAutoSlide = (duration) => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    }, duration);
  };

  // stop automatic slide transition and clear setInterval

  const stopAutoSlide = () => {
    clearInterval(slideInterval);
  };

  // call the function of init slider
  init();

  // add event listeners to pause on mouse enter and resume on mouse leave
  sliderContainer.addEventListener("mouseenter", stopAutoSlide);
  sliderContainer.addEventListener("mouseleave", () =>
    startAutoSlide(durationTime)
  );
  // call the function of automatic slide and pass duration time as an argument
  startAutoSlide(durationTime);
};
