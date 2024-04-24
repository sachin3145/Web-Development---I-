function addTask() {
  var taskInput = document.getElementById("new-task");
  var taskText = taskInput.value.trim();
  if (taskText === "") return;

  var task = {
    id: Date.now(),
    text: taskText,
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}


function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}


function editTask(id, newText) {
  var task = tasks.find((task) => task.id === id);
  if (task) {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
  var storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = [];
  }
  renderTasks();
}


function renderTasks() {
  var tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";
  tasks.forEach((task) => {
    var taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
                    <input type="text" value="${task.text}">
                    <button onclick="editTask(${task.id}, this.previousElementSibling.value)">Save</button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                `;
    tasksContainer.appendChild(taskElement);
  });
}

var tasks = [];
loadTasks();
