// To Do Application

const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const clearAllBtn = document.querySelector("#clearAllBtn");
const taskList = document.querySelector("#taskList");

// Store tasks in array
let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((taskText, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks(); // re-render after deletion
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return;
  tasks.push(task);
  input.value = "";
  renderTasks();
});

clearAllBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});