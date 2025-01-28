const tasks = [];
let x;

export function addTask(task) {
  // Interface or an API (Application Programming Interface)
  tasks.push(task);
}

export function getTasks() {
  return tasks;
}

export function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
  }
}
