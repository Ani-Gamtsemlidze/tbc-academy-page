// change header background while user scrolls down.

const changeHeaderBackground = () => {
  const siteHeader = document.querySelector(".site_header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    siteHeader.style.backgroundColor = "rgba(43,43,43,0.9)";
  } else {
    siteHeader.style.backgroundColor = "rgb(43,43,43)";
  }
};

export { changeHeaderBackground };
