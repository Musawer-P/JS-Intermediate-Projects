const questions = [
  {
    question: "Which language is used in web browsers?",
    answers: ["Javascript", "Python", "C++", "C#"],
    correct: "Javascript"
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language", "None of the above"],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS control?",
    answers: ["Content", "Structure", "Styling", "Behavior"],
    correct: "Styling"
  },
  {
    question: "Which tag is used for images in HTML?",
    answers: ["<img>", "<image>", "<pic>", "<src>"],
    correct: "<img>"
  },
  {
    question: "What is the brain of the computer?",
    answers: ["RAM", "CPU", "Hard Drive", "GPU"],
    correct: "CPU"
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = Array(questions.length).fill(null); // to store user's answers

const questionElement = document.getElementById("questions");
const answersDiv = document.querySelector(".answer-div");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const p = document.createElement("p");
    p.textContent = answer;
    p.classList.add("answer-option");

    // highlight if previously selected
    if (userAnswers[currentQuestion] === answer) {
      p.style.backgroundColor = "#d4edda"; // light green
    }

    p.addEventListener("click", () => {
      userAnswers[currentQuestion] = answer;
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        // last question - show submit
        submitBtn.style.display = "block";
        loadQuestion();
      }
    });

    answersDiv.appendChild(p);
  });

  // Show/hide buttons
  backBtn.style.display = currentQuestion > 0 ? "block" : "none";
  submitBtn.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});
submitBtn.addEventListener("click", () => {
  score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      score += 10;
    }
  });

  questionElement.textContent = "✅ Quiz Completed!";
  answersDiv.innerHTML = `🎉 You scored <strong>${score}</strong> out of <strong>50</strong>`;
  backBtn.style.display = "none";
  submitBtn.style.display = "none";
});

loadQuestion();
