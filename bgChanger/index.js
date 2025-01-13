const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".changeBtn");

const btn = document.getElementById("grey");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
