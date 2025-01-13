const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessInput");
const remaining = document.querySelector(".guesses");
const prevGuess = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const bottomParas = document.querySelector(".bottom-para");

let randomNum = parseInt(Math.random() * 100 + 1);

let guessSlots = [];
let numOfGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid number.");
  } else if (guess < 1) {
    alert("Please Enter a number more than 1");
  } else if (guess > 100) {
    alert("Please Enter a number less than 100");
  } else if (guess === "") {
    alert("Please Enter a number.");
  } else {
    guessSlots.push(guess);
    if (numOfGuess >= 10) {
      displayGuess(guess);
      displayMsg(`Game Over. <br/> Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`🎉 Correct! You guessed it!`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`Number is too low`);
  } else if (guess > randomNum) {
    displayMsg`Number is too high`;
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML = `${guess}`;
  numOfGuess++;
  remaining.innerHTML = `${10 - numOfGuess}`;
}

function displayMsg(msg) {
  lowOrHigh.innerHTML = `<h3>${msg}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  //   submit.style.display = "none";
  const button = document.createElement("button");
  button.classList.add("newGameBtn");
  button.innerText = `🔄 New Game`;
  submit.replaceWith(button);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    guessSlots = [];
    numOfGuess = 0;
    prevGuess.innerHTML = "";
    remaining.innerHTML = `${10 - numOfGuess}`;
    userInput.removeAttribute("disabled");
    bottomParas.removeChild(div);
    playGame = true;
  });
}

console.log(randomNum);
