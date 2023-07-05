// Global array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks in the UI
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="editTask(${index})">Edit</button> <button onclick="removeTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt("Edit the task:", tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        displayTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initial display of tasks
displayTasks();
