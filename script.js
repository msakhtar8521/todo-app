function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  li.addEventListener("dblclick", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
