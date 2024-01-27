// declare variables and get elements.
const headerElement = document.querySelector(".site-header");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const overlayFade = document.querySelector(".overlay-fade");
const mobileMenu = document.querySelector(".mobile-menu");

// export function to use in main js file, which is connected with html file.
// adjust header visibility based on scroll position.

export const changeHeaderVisibility = () => {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // check if scroll position is greater than 0 - user scrolls down
  //  set a slightly transparent background for the header

  headerElement.style.backgroundColor =
    scrollPosition > 0 ? "rgba(26, 30, 31, 0.9)" : "rgb(26, 30, 31)";
};

// handle the mobile navigation

export const handleMobileNavigation = () => {
  menuToggle.addEventListener("click", function () {
    // if mobile menu doesnt contain below class names, add the class and apply styling
    if (!menuToggle.classList.contains("open-menu")) {
      menuToggle.classList.add("open-menu");
      overlayFade.classList.add("active");
      // while user opens mobile menu it cant be scrolled
      document.body.style.overflow = "hidden";
    } else {
      // if the mobile menu already has those classes we need to remove them.
      overlayFade.classList.remove("active");
      menuToggle.classList.remove("open-menu");
      document.body.style.overflow = "unset";
    }
  });

  // prevent clicks inside the mobile menu from closing it.

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  overlayFade.addEventListener("click", function () {
    overlayFade.classList.remove("active");
    menuToggle.classList.remove("open-menu");
  });
};

// while user scrolling down in mobile version the header is hidden

export const handleHeaderScroll = () => {
  let lastScrollTop = 0;
  let scrollThreshold = 80;
  // scrollThresHold

  const adjustHeaderOnScroll = () => {
    // get the current vertical scroll position of the webpage.
    const scrollOffSet =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollOffSet > scrollThreshold && scrollOffSet > lastScrollTop) {
      // scrolling down
      document.querySelector(".site-header").style.transform =
        "translateY(-100%)";
    } else {
      // scrolling up
      document.querySelector(".site-header").style.transform = "translateY(0)";
    }
    lastScrollTop = scrollOffSet;
  };

  // Function to handle resize
  const handleWindowResize = () => {
    //
    const isMobileView = window.innerWidth <= 992;

    if (isMobileView) {
      window.addEventListener("scroll", adjustHeaderOnScroll);
    } else {
      // If it's not mobile, remove scroll event listener and style
      window.removeEventListener("scroll", adjustHeaderOnScroll);
      document.querySelector(".site-header").style.transform = "translateY(0)";
    }
  };

  handleWindowResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleWindowResize);
};
