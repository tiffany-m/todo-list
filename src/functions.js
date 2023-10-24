import { format, parseISO } from "date-fns";

const priorityBtnYellow = document.getElementById('low-priority-btn');
const priorityBtnOrange = document.getElementById('medium-priority-btn');
const priorityBtnRed = document.getElementById('high-priority-btn');
const toDoProjectContainer = document.getElementById("to-do-project-container");

export function findValueSelectedRadioBtn() {
    let selectedPriority = "";

    if (priorityBtnYellow.checked) {
        selectedPriority = priorityBtnYellow.value;
    } else if (priorityBtnOrange.checked) {
        selectedPriority = priorityBtnOrange.value;
    } else {
        selectedPriority = priorityBtnRed.value;
    }

    return selectedPriority;
}

export function clearModal(form) {
    form.title.value = "";
    form.description.value = "";
    form.dueDate.value = "";

    let radioBtn = document.querySelector('input[name="priority-btn"]:checked');
    if (radioBtn) radioBtn.checked = false;
}

export function addNewProjectToDisplay(project) {
    console.log(project.dueDate)

    // date is a string and must be parsed for format() to work
    let dateFormatted = format(parseISO(project.dueDate), 'MM/dd/yyyy');

    console.log(dateFormatted)

    let projectElement = document.createElement("div");
    projectElement.insertAdjacentHTML('beforeend', `
        <div>${project.title}</div>
        <div>${project.description}</div>
        <div>${dateFormatted}</div>
        <span class="priority-color-project">${project.priority}</span>
        <button class="delete-btn btn">Delete</button>`);

    // change priority element to proper color for new project
    let priorityColorElement = projectElement.querySelector(".priority-color-project");

    if (project.priority === "LOW") {
        priorityColorElement.className += " yellow-color";
    } else if (project.priority === "MEDIUM") {
        priorityColorElement.className += " orange-color";
    } else {
        priorityColorElement.className += " red-color";
    }

    toDoProjectContainer.appendChild(projectElement);
}