// make header less visible while user scrolls down.

// export function to use in main js file, which is connected with index.html

export const changeHeaderBackground = () => {
  const siteHeader = document.querySelector(".site-header");

  // get the current scroll position
  const scrollPosition = window.scrollY;

  // check if scroll position is greater than 0 - it means that user scrolls down
  // in that case set a slightly transparent background color
  if (scrollPosition > 0) {
    siteHeader.style.backgroundColor = "rgba(26, 30, 31, 0.9)";
  } else {
    siteHeader.style.backgroundColor = "rgb(26, 30, 31)";
  }
};