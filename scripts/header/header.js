// make header less visible while user scrolls down.

// export function to use in main js file, which is connected with index.html

export const changeHeaderBackground = () => {
  const siteHeader = document.querySelector(".site-header");

  // get the current scroll position
  const scrollPosition = window.scrollY;

  // check if scroll position is greater than 0 - it means that user scrolls down
  // in that case set a slightly transparent background color

  siteHeader.style.backgroundColor =
    scrollPosition > 0 ? "rgba(26, 30, 31, 0.9)" : "rgb(26, 30, 31)";
};

// responsive navigation

const burgerMenu = document.querySelector(".burger-menu");
const mobileNavigation = document.querySelector(".respo-navigation");
const closeMenu = document.querySelector(".open-menu");
export const responsiveNavigation = () => {
  burgerMenu.addEventListener("click", function () {
    if (!burgerMenu.classList.contains("open-menu")) {
      burgerMenu.classList.add("open-menu");
      mobileNavigation.style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      mobileNavigation.style.display = "none";
      burgerMenu.classList.remove("open-menu");
    }
  });

  // closeMenu.addEventListener("click", function () {
  //   // mobileNavigation.style.display = "none";
  //   burgerMenu.classList.remove("open-menu");
  // });
};
