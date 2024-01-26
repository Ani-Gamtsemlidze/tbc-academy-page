// select all elements with class name ".faq-question" and store in variable.
const questionItems = document.querySelectorAll(".faq-question");

// use export to import this function in main script.js file
export const toggleFAQ = () => {
  // loop through each question
  for (const question of questionItems) {
    question.addEventListener("click", (e) => {
      e.preventDefault();

      // get the container element associated with the clicked question

      const container = document.getElementById(question.dataset.container);
      const arrowImage = question.querySelector(".question-arrow");

      arrowImage.classList.add("rotate-arrow");

      // check if container does not have "active" class name
      if (!container.classList.contains("active")) {
        container.classList.add("active");

        container.style.height = "auto";

        // capture the current height of container and store it in variable
        const elementHeight = `${container.clientHeight}px`;

        // set container height to 0 and use setTimeOut for smooth transition
        container.style.height = "0px";

        setTimeout(() => {
          container.style.height = elementHeight;
        }, 0);
      } else {
        container.style.height = "0px";
        arrowImage.classList.remove("rotate-arrow");

        // add a transitionend event listener to remove the "active" class after the transition
        container.addEventListener(
          "transitionend",
          () => {
            container.classList.remove("active");
          },
          {
            once: true,
          }
        );
      }
    });
  }
};
