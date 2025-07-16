document.querySelectorAll('.banner__button').forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.textContent} button clicked!`);
  });
});


  document.querySelectorAll(".faq-f").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector("img");

      if (answer.style.display === "none") {
        answer.style.display = "block";
        icon.src = "images/minus.png";
      } else {
        answer.style.display = "none";
        icon.src = "images/plus.png";
      }
    });
  });
