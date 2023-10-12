const toDoProjectContainer = document.getElementById("to-do-project-container");
const addNewProjectBtn = document.getElementById("add-new-project-btn");
const clearBtn = document.getElementById("clear-btn");
const submitBtn = document.getElementById("submit-btn");
const closeModalBtn = document.getElementById("close-btn");
const form = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    dueDate: document.getElementById("due-date"),
    priority: document.getElementById("priority")
}
const priorityBtn = {
    yellow: document.getElementById('low-priority-btn'),
    orange: document.getElementById('medium-priority-btn'),
    red: document.getElementById('high-priority-btn')
}
let selectedPriority = "";
let index;
const indexFromStorage = localStorage.getItem("index");

// Initialize localStorageProjects from local storage if data exists.
// This prevents data loss when the page is refreshed.
let localStorageProjects = JSON.parse(localStorage.getItem("myProjects"));

// defaults to prevent errors
if (localStorageProjects == null) localStorageProjects = [];
if (indexFromStorage && !isNaN(indexFromStorage)) {
    index = JSON.parse(indexFromStorage);
} else {
    index = 0;
}

function ToDoProject(title, description, dueDate, priority, index) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.index = index;
}
