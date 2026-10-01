function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = () => completeTask(index);

    li.appendChild(completeBtn);
    list.appendChild(li);
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  displayTasks();
}
