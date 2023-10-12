export function findValueSelectedRadioBtn() {
    if (priorityBtn.yellow.checked) {
        selectedPriority = priorityBtn.yellow.value;
        return selectedPriority;
    } else if (priorityBtn.orange.checked) {
        selectedPriority = priorityBtn.orange.value;
        return selectedPriority;
    } else {
        selectedPriority = "HIGH";
        return selectedPriority;
    }
}

export function clearModal() {
    form.title.value = "";
    form.description.value = "";
    form.dueDate.value = "";

    let radioBtn = document.querySelector('input[name="priority-btn"]:checked');
    if (radioBtn) radioBtn.checked = false;
}

export function addNewProjectToDisplay(project) {
    let projectElement = document.createElement("div");
    projectElement.insertAdjacentHTML('beforeend', `
        <div>${project.title}</div>
        <div>${project.description}</div>
        <div>${project.dueDate}</div>
        <span class="priority-color-project">${project.priority}</span>
        <button class="edit-btn btn">Edit</button>
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