window.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("task-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const task = document.getElementById("task").value;
  const desc = document.getElementById("desc").value;
  const start = document.getElementById("start").value;
  const deadline = document.getElementById("deadline").value;

  const newTask = {
    id: Date.now(), // unique id for each task
    task,
    desc,
    start,
    deadline
  };

  addTaskToDOM(newTask);
  saveTaskToStorage(newTask);

  document.getElementById("task-form").reset();
});

function addTaskToDOM(taskObj) {
  const cardContainer = document.getElementById("card");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.setAttribute("data-id", taskObj.id);

  taskDiv.innerHTML = `
    <h3>${taskObj.task}</h3>
    <p>${taskObj.desc}</p>
    <p><strong>Start:</strong> ${taskObj.start}</p>
    <p><strong>Deadline:</strong> ${taskObj.deadline}</p>
    <button class="delete-btn">Delete</button>
  `;

  taskDiv.querySelector(".delete-btn").addEventListener("click", function () {
    deleteTask(taskObj.id);
  });

  cardContainer.appendChild(taskDiv);
}

function saveTaskToStorage(taskObj) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

function deleteTask(id) {
  const taskDiv = document.querySelector(`.task[data-id='${id}']`);
  if (taskDiv) taskDiv.remove();

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
