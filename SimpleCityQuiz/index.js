let form = document.getElementById("form");
let loadingMessage = document.getElementById("loading");
let btn = document.getElementById("submit");
let textArea = document.getElementById("textarea");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");
let refreshBtn = document.getElementById("refresh");
let hintBtn = document.getElementById("hintBtn");
let hintPara = document.getElementById("hintPara");
hide(hintPara);

function handleSubmit(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (textArea.value === "istanbul") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}

function show(el) {
  el.style.display = "block";
}

function hide(el) {
  el.style.display = "none";
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function handleRefresh() {
  location.reload();
}

function handleHintbtn(e) {
  e.preventDefault();
  show(hintPara);
  hide(hintBtn);
}

function handleTextArea() {
  if (textArea.value.length === 0) {
    disable(btn);
  } else {
    enable(btn);
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();

  disable(textArea);
  disable(btn);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await handleSubmit(textArea.value);
    hide(form);
    show(successMessage);
    show(refreshBtn);
  } catch (error) {
    hide(loadingMessage);
    show(errorMessage);
    errorMessage.textContent = error.message;
    if (errorMessage) {
      show(hintBtn);
    }
  } finally {
    hide(loadingMessage);
    enable(textArea);
    enable(btn);
  }
}

btn.addEventListener("click", handleFormSubmit);
form.addEventListener("input", handleTextArea);
refreshBtn.addEventListener("click", handleRefresh);
hintBtn.addEventListener("click", handleHintbtn);
