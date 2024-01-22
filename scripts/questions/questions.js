export const questions = () => {
  const questionItems = document.querySelectorAll(".faq-item");

  for (const question of questionItems) {
    question.addEventListener("click", function () {
      this.classList.toggle("active");

      const answer = this.querySelector(".faq-answer");

      if (!answer.classList.contains("visible")) {
        answer.classList.add("visible");
        answer.style.height = "auto";

        const height = answer.clientHeight + "px";

        answer.style.height = "0px";

        setTimeout(() => {
          answer.style.height = height;
        }, 0);
      } else {
        answer.style.height = "0px";

        answer.addEventListener(
          "transitionend",
          function () {
            answer.classList.remove("visible");
          },
          {
            once: true,
          }
        );
      }
    });
  }
};
