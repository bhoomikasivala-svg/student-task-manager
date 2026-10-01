let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    input.value = "";
    displayTasks();
  }
}
