const questions = [
  {
    question:
      "The numbering system with a radix of 16 is more commonly referred to as",
    answers: ["Hexidecimal", "Binary", "Duodecimal", "Octal"],
    correct: 0,
  },
  {
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    answers: ["512MB", "5GB", "1GB", "Unlimited"],
    correct: 2,
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answers: ["Python", "Java", "C", "Jakarta"],
    correct: 1,
  },
  {
    question:
      "If you were to code software in this language you’d only be able to type 0's and 1's.",
    answers: ["JavaScript", "C++", "Python", "Binary"],
    correct: 3,
  },
  {
    question: "What does the Prt Sc button do?",
    answers: [
      "Nothing",
      "Saves a .png file of what's on the screen in your screenshots folder in photos",
      "Captures what's on the screen and copies it to your clipboard",
      "Closes all windows",
    ],
    correct: 2,
  },
  {
    question: "What does LTS stand for in the software market?",
    answers: [
      "Long Taco Service",
      "Long Term Support",
      "Ludicrous Transfer Speed",
      "Ludicrous Turbo Speed",
    ],
    correct: 1,
  },
  {
    question: "How many values can a single byte represent?",
    answers: ["8", "1", "256", "1024"],
    correct: 2,
  },
  {
    question: "What does GHz stand for?",
    answers: ["Gigahotz", "Gigahatz", "Gigahetz", " Gigahertz"],
    correct: 3,
  },
  {
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    answers: [
      "Motherboard",
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
    correct: 0,
  },
  {
    question:
      "Which computer language would you associate Django framework with?",
    answers: ["C#", "C++", "Python", "Java"],
    correct: 2,
  },
];

const questionPara = document.querySelector("p");
const options = document.querySelectorAll("li");
const container = document.querySelector(".container");
const btn = document.querySelector(".next");
const restart = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionPara.textContent = currentQuestion.question;

  options.forEach((option, index) => {
    option.style.backgroundColor = "";
    option.textContent = currentQuestion.answers[index];
    option.onclick = () => selectAnswer(index);
  });
}

function disabledOptions() {
  options.forEach((option) => {
    option.onclick = false;
  });
}

function enableOptions() {
  options.forEach((option) => {
    option.style.backgroundColor = "";
    option.onclick = true;
  });
}

function selectAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correct) {
    score++;
    options[selectedOption].style.backgroundColor = "green";
  } else if (selectedOption === selectedOption) {
    options[selectedOption].style.backgroundColor = "red";
    options[currentQuestion.correct].style.backgroundColor = "green";
  }
  disabledOptions();
  btn.classList.remove("next-hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    enableOptions();
    displayQuestion();
  } else {
    showResult();
  }
}
btn.addEventListener("click", nextQuestion);

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  const showScore = document.getElementById("score-display");
  if (showScore) {
    showScore.remove();
  }

  displayQuestion();
  restart.classList.add("restart-hidden");
  options.forEach((option) => {
    option.style.display = "block";
  });
}
restart.addEventListener("click", restartQuiz);

function showResult() {
  questionPara.textContent = "Quiz Completed!";
  const ul = document.getElementById("ulContainer");
  const showScore = document.createElement("p");
  showScore.setAttribute("id", "score-display");
  showScore.textContent = `Score : ${score} / ${questions.length}`;
  ul.append(showScore);
  options.forEach((option) => {
    option.style.display = "none";
  });
  btn.classList.add("next-hidden");
  restart.classList.remove("restart-hidden");
}

window.addEventListener("load", displayQuestion);
