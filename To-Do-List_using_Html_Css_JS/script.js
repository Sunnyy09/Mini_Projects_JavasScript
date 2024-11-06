const addTask = document.querySelector(".topbuttons button");
const input = document.querySelector("#taskInput");
const listContainer = document.querySelector(".list-Container");

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", loadTodos);

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => {
    renderTodoItem(todo.text, todo.date);
  });
}

const renderTodos = () => {
  let taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskDate = new Date();
  const dateString = taskDate.toLocaleDateString();
  //toLocaleDateString() converts this date to a readable format (e.g., "11/4/2024").

  // Create and render new task item
  renderTodoItem(taskText, dateString);

  // Save the task to local storage
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ text: taskText, date: dateString });
  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
};

const renderTodoItem = (taskText, dateString) => {
  const newlist = document.createElement("div");

  const paragraph = document.createElement("p");
  paragraph.textContent = `${taskText} - on ${dateString}`;
  newlist.appendChild(paragraph);

  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editBtn.onclick = () => editTask(newlist, taskText, dateString);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteBtn.onclick = () => deleteTask(newlist, taskText, dateString);

  let newSection = document.createElement("section");

  newSection.appendChild(deleteBtn);
  newSection.appendChild(editBtn);
  newlist.appendChild(newSection);
  listContainer.appendChild(newlist);

  if (!taskText !== " ") {
    input.value = "";
  }
};

const deleteTask = (newlist, taskText, dateString) => {
  listContainer.removeChild(newlist);

  //Remove the task from Local Storage
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const updatedTodos = todos.filter((todo) => {
    !(todo.text === taskText && todo.date === dateString);
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

const editTask = (newlist, oldText, oldDate) => {
  let currentText = newlist.firstChild.firstChild.nodeValue.split(" - ")[0];
  let newlistText = prompt("Edit your task:", currentText);
  if (newlistText !== null && newlistText.trim() !== " ") {
    newlist.firstChild.firstChild.nodeValue = `${newlistText} - on ${oldDate}`;
  }

  // Update the text in local storage
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const updatedTodos = todos.map((todo) => {
    if (todo.text === oldText && todo.date === oldDate) {
      return { text: newlistText, date: oldDate };
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};
addTask.addEventListener("click", renderTodos);
