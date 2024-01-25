import {
  changeHeaderBackground,
  responsiveNavigation,
} from "./header/header.js";
import { questions } from "./questions/questions.js";
import { sliderSwipe } from "./slider/slider.js";

// call functions in main js
window.onscroll = changeHeaderBackground;
questions();
sliderSwipe();
responsiveNavigation();

const termsLink = document.getElementById("terms-info-link");
const footerTerms = document.querySelector(".footer-terms");

const footerTermsContainer = document.querySelector(".footer-terms-container");

const termsClose = document.querySelector(".footer-terms-close");
const footerFade = document.querySelector(".footer-terms");

termsLink.addEventListener("click", function (e) {
  e.preventDefault();
  footerTerms.classList.add("active");
});

termsClose.addEventListener("click", function () {
  footerTerms.classList.remove("active");
});

footerTermsContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});

footerFade.addEventListener("click", function () {
  footerTerms.classList.remove("active");
});
