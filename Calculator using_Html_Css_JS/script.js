const btns = document.querySelectorAll("button");
const display = document.querySelector(".inputBox input");

let string = "";
let arr = Array.from(btns);

arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnVal = e.target.value;
    if (btnVal === "=") {
      string = eval(string);
      display.value = string;
    } else if (
      btnVal === "+" ||
      btnVal === "-" ||
      btnVal === "*" ||
      btnVal === "/" ||
      btnVal === "%"
    ) {
      // Only add operator if it doesn't follow another operator
      if (string && !["+", "-", "*", "/", "%"].includes(string.slice(-1))) {
        string += btnVal;
        display.value = string;
      }
    } else if (btnVal === "AC") {
      string = "";
      display.value = string;
      if (display.value === "") {
        display.value = "0";
      }
    } else if (btnVal === "DEL") {
      string = string.slice(0, -1);
      display.value = string;
    } else {
      string += btnVal;
      display.value = string;
    }
  });
});
