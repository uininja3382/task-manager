import { addTask } from "./taskUtils/taskUtils";
import { getTasks } from "./taskUtils/taskUtils";

const taskContainer = document.querySelector("#task-list-container");
const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task");
const isTaskListEmpty = document.querySelector("#is-task-list-empty");

addTaskButton.addEventListener("click", () => {
  const task = taskInput.value;
  if (task) {
    addTask(task);
    taskInput.value = "";
    const tasks = getTasks();
    taskContainer.innerHTML = "";
    tasks.forEach((task) => {
      const taskElement = document.createElement("li");
      taskElement.textContent = task;
      taskContainer.appendChild(taskElement);
    });
    tasks.map((items) => {
      console.log(items);
    });
  } else {
    alert("Please enter a task");
    taskInput.focus();
  }
});
