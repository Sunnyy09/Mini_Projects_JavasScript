//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies

const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropDowns = document.querySelectorAll(".dropDown select");
//let flagImg = document.querySelector(".select-container img");
const btn = document.getElementById("output");
const msg = document.querySelector("form .msg");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

window.addEventListener("load", () => {
  updateExchangeRate();
});

for (let select of dropDowns) {
  for (currCode in countryList) {
    // console.log(currCode, countryList[currCode]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  //   flagImg.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  const data = await response.json();
  const baseCurrency = fromCurr.value.toLowerCase();
  const rates = data[baseCurrency];

  const targetCurrency = toCurr.value.toLowerCase();
  let rate = rates[targetCurrency];

  let finalAmount = rate * amountVal;
  //   console.log(finalAmount);
  msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
