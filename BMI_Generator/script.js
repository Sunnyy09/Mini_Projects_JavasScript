const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cmInput = parseInt(document.querySelector("#cm").value);
  const kgInput = parseInt(document.querySelector("#kg").value);
  const result = document.querySelector("#result");

  if (cmInput === "" || cmInput < 0 || isNaN(cmInput)) {
    result.innerHTML = `Please give a valid height "${cmInput}"`;
  } else if (kgInput === "" || kgInput < 0 || isNaN(kgInput)) {
    result.innerHTML = `Please give a valid weight "${kgInput}"`;
  } else {
    const bmi = (kgInput / ((cmInput * cmInput) / 10000)).toFixed(2);
    result.innerHTML = `<span>Result :- ${bmi}</span>`;

    const category = document.querySelector(".guide");
    if (bmi < 18.6) {
      category.innerHTML = `<span>${bmi} is <b>Linear Weight</b></span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category.innerHTML = `<span>${bmi} is <b>Normal Weight</b></span>`;
    } else {
      category.innerHTML = `<span>${bmi} is <b>Over Weight</b></span>`;
    }
  }
});
