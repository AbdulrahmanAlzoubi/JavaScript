const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateTaskCount() {
    taskCount.textContent = totalTasks;
}

function addTask() {
    if (taskInput.value === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function () {
        task.remove();
        totalTasks = totalTasks - 1;
        updateTaskCount();
    });

    task.addEventListener("click", function () {
        task.textContent = "✓ " + task.textContent;
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    totalTasks = totalTasks + 1;
    updateTaskCount();

    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});