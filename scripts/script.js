import {
  changeHeaderBackground,
  responsiveNavigation,
} from "./header/header.js";
import { questions } from "./questions/questions.js";
import { sliderSwipe } from "./slider/slider.js";
import { termsAndConditions } from "./footer/terms.js";

// call functions in main js
window.onscroll = changeHeaderBackground;
questions();
sliderSwipe();
responsiveNavigation();
termsAndConditions();
