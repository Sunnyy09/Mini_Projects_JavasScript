let btn = document.querySelector("button");
const container = document.querySelector(".container");
const strng = document.querySelector("strong");
const countContainer = document.querySelector(".counts");
console.log(countContainer);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

let count = 0;
function updateState() {
  count += 1;
  strng.innerText = count;
  const bgColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  countContainer.style.borderColor = bgColor;
  container.style.boxShadow = `0px 20px 10px ${bgColor}`;
}

btn.addEventListener("click", updateState);
