import './style.css';
import { findValueSelectedRadioBtn, clearModal, addNewProjectToDisplay } from './functions';

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

addNewProjectBtn.addEventListener("click", () => {
    modal.showModal();
})

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevents modal (dialog element in HTML) from clearing projects when clicked
    modal.close();
})


// new project added to display and local storage
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();  // prevents form from trying to submit
    modal.close();

    index++;
    localStorage.setItem("index", JSON.stringify(index));
    index = parseInt(localStorage.getItem("index"), 10);
    console.log(`index added: ${index}`)

    let selectedPriority = findValueSelectedRadioBtn();

    let newProject = new ToDoProject(form.title.value, form.description.value, form.dueDate.value, selectedPriority, index);
    localStorageProjects.push(newProject);
    addNewProjectToDisplay(newProject);

    localStorage.setItem("myProjects", JSON.stringify(localStorageProjects));
    clearModal(form);
});

// loads projects saved to local storage when page is refreshed
function loadProjects() {
    let projects = JSON.parse(localStorage.getItem("myProjects"));

    if (projects == null || projects.length == 0) return;

    for (let i = 0; i < projects.length; i++) {
        // . notation because projects array is full of objects
        selectedPriority = projects[i].priority;
        addNewProjectToDisplay(projects[i]);
    }

    return;
}

window.onload = loadProjects;