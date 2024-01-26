// import functions from splitted js files

// import functions related to header behavior
import {
  changeHeaderVisibility,
  handleMobileNavigation,
} from "./header/header.js";

// import function related to questions handling
import { questions } from "./questions/questions.js";

// import function related to sinitialize the slider
import { initSlider } from "./slider/slider.js";
// import function related to terms and conditions in the footer
import { termsAndConditions } from "./footer/terms.js";

// call functions in main js file
window.onscroll = changeHeaderVisibility;
questions();
initSlider();
handleMobileNavigation();
termsAndConditions();
