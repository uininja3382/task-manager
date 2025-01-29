import { addTask, getTasks } from "./taskUtils/taskUtils";
const taskContainer = document.querySelector("#task-list-container");
const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task");

addTaskButton.addEventListener("click", () => {
  const task = taskInput.value;
  if (task) {
    addTask(task);
    taskInput.value = "";
    const tasks = getTasks();
    taskContainer.innerHTML = "";
    tasks.forEach((item) => {
      const taskElement = document.createElement("li");
      taskElement.textContent = item;
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

const Person = function (name, yearOfBirth) {
  //constructor
  this.name = name;
  this.yearOfBirth = yearOfBirth;
};

Person.prototype.calculateAge = function () {
  console.log(2025 - this.yearOfBirth);
};

const Employee = function (name, yearOfBirth, job) {
  Person.call(this, name, yearOfBirth);
  this.job = job;
};

const Raj = new Employee("Raj", 1990, "Developer");
console.log(Raj);

//ES6 classes
class Teacher {
  constructor(name, yearOfBirth, subject) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.subject = subject;
  }
  calculateAge() {
    console.log(2025 - this.yearOfBirth);
  }
}

class Student extends Teacher {
  constructor(name, yearOfBirth, subject, grade) {
    super(name, yearOfBirth, subject);
    this.grade = grade;
  }
}

// eslint-disable-next-line no-unused-vars
const madhu = new Student("Madhu", 1990, "Maths", "A");
