let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winnerMsg = document.querySelector(".msg");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "0";
      turnX = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("winColor");
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

function highlightWinningBoxes(box1, box2, box3) {
  box1.classList.add("winColor");
  box2.classList.add("winColor");
  box3.classList.add("winColor");
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let box1 = boxes[pattern[0]];
    let box2 = boxes[pattern[1]];
    let box3 = boxes[pattern[2]];

    let pos1Val = box1.innerText;
    let pos2Val = box2.innerText;
    let pos3Val = box3.innerText;

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      highlightWinningBoxes(box1, box2, box3);
      disabledBoxes();
      return true;
    }
  }
  return false;
};

const newGame = () => {
  turnX = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);
