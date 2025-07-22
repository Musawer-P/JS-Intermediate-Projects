document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("task-form");
  const taskList = document.getElementById("card");

  // Load tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(displayTask);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("task").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const start = document.getElementById("start").value;
    const deadline = document.getElementById("deadline").value;

    if (!name || !desc || !start || !deadline) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask = { name, desc, start, deadline };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTask(newTask);

    form.reset();
  });

  function displayTask(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
      <h3 class="task-title">${task.name}</h3>
      <p class="task-desc">${task.desc}</p>
      <div class="task-dates">
        <small><strong>Start:</strong> ${task.start}</small><br>
        <small><strong>Deadline:</strong> ${task.deadline}</small>
      </div>
      <hr>
    `;

    taskList.appendChild(taskCard);
  }
});
