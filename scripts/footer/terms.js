const termsLink = document.getElementById("terms-info-link");
const footerTerms = document.querySelector(".footer-terms");

const footerTermsContainer = document.querySelector(".footer-terms-container");

const termsClose = document.querySelector(".footer-terms-close");
const footerFade = document.querySelector(".footer-terms");

export const termsAndConditions = () => {
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
};
