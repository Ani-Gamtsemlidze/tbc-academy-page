function questions() {
  const questionItems = document.querySelectorAll(".faq_item");
  const answerItems = document.querySelectorAll(".faq_answer");

  for (const [index, question] of questionItems.entries()) {
    question.addEventListener("click", () => {
      question.classList.toggle("active");

      if (answerItems[index]) {
        answerItems[index].classList.toggle("visible");
      }
    });
  }
}

export { questions };
