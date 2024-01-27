// import functions from splitted js files

// import functions related to header behavior
import {
  changeHeaderVisibility,
  handleMobileNavigation,
} from "./header/header.js";

// import function related to questions handling
import { toggleFAQ } from "./questions/questions.js";

// import function related to sinitialize the slider
import { initSlider } from "./slider/slider.js";
// import function related to terms and conditions in the footer
import { termsAndConditions } from "./footer/terms.js";
import { handleHeaderScroll } from "./header/header.js";

// call functions in main js file
window.onscroll = changeHeaderVisibility;
toggleFAQ();
initSlider();
handleMobileNavigation();
termsAndConditions();
handleHeaderScroll();
