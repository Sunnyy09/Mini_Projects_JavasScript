const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date().toLocaleString();

  clock.innerHTML = date;
}, 1000);
