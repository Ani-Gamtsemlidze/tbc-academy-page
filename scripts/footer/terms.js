// declare variables
const termsLink = document.getElementById("terms-info-link");
const footerTerms = document.querySelector(".footer-terms");
const footerTermsContainer = document.querySelector(".footer-terms-container");
const closeTerms = document.querySelectorAll(".closeTerms");

export const termsAndConditions = () => {
  // open terms and contions on clicking
  termsLink.addEventListener("click", function (e) {
    e.preventDefault();
    footerTerms.classList.add("active");
    // scroll on the top of terms container
    footerTermsContainer.scrollTop = 0;
  });

  // prevent click propagation inside the terms container

  footerTermsContainer.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // close terms container clicking on close, close btn and outside.
  // I add same class names where I need to remove the active class.
  closeTerms.forEach((term) => {
    term.addEventListener("click", function () {
      footerTerms.classList.remove("active");
    });
  });
};
