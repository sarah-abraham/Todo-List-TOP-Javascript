import "../styles/popupform.css"

function createProjectForm(){
    const formContent = document.querySelector(".project-form-container");

    while (formContent.firstChild) {
        formContent.removeChild(formContent.firstChild);
    }
   
    const form = document.createElement("form");

    const titleContainer = document.createElement("div");
    titleContainer.className = "form-element-container";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "form-element-container";

    const labelTitle = document.createElement("label");
    labelTitle.htmlFor = "project-title";
    labelTitle.textContent = "Project Title: ";
    const inputTitle = document.createElement("input");
    inputTitle.type= "text";
    inputTitle.id = "project-title";
    inputTitle.name = "project-title";
    titleContainer.appendChild(labelTitle);
    titleContainer.appendChild(inputTitle);

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.id = "project-submit";
    submitButton.textContent = "Submit";
    buttonContainer.appendChild(submitButton);

    form.appendChild(titleContainer);
    form.appendChild(buttonContainer);

    formContent.appendChild(form);
    return formContent;
}

function createTaskForm(){
    const formContent = document.querySelector(".task-form-container");

    while (formContent.firstChild) {
        formContent.removeChild(formContent.firstChild);
    }
   
    const form = document.createElement("form");
    form.id = "task-form";
    form.className = "task-form-class";
    const titleContainer = document.createElement("div");
    titleContainer.className = "form-element-container";
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "form-element-container";
    const priorityContainer = document.createElement("div");
    priorityContainer.className = "form-element-container";
    const dateContainer = document.createElement("div");
    dateContainer.className = "form-element-container";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "form-element-container";

    const labelTitle = document.createElement("label");
    labelTitle.htmlFor = "task-title";
    labelTitle.textContent = "Task Title: ";
    const inputTitle = document.createElement("input");
    inputTitle.type= "text";
    inputTitle.id = "task-title";
    inputTitle.name = "task-title";
    titleContainer.appendChild(labelTitle);
    titleContainer.appendChild(inputTitle);

    const labelDescription = document.createElement("label");
    labelDescription.htmlFor = "desc";
    labelDescription.textContent = "Task Description: ";
    const inputDescription = document.createElement("textarea");
    inputDescription.id = "desc";
    inputDescription.name = "desc";
    descriptionContainer.appendChild(labelDescription);
    descriptionContainer.appendChild(inputDescription);

    const labelPriority = document.createElement("label");
    labelPriority.textContent = "Priority: ";
    priorityContainer.appendChild(labelPriority);

    const priorities = ["low", "medium", "high"];
    priorities.forEach(priority => {
        const radioContainer = document.createElement("div");

        const inputPriority = document.createElement("input");
        inputPriority.type = "radio";
        inputPriority.id = priority;
        inputPriority.name = "priority";
        inputPriority.value = priority;

        const labelPriority = document.createElement("label");
        labelPriority.htmlFor = priority;
        labelPriority.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

        radioContainer.appendChild(inputPriority);
        radioContainer.appendChild(labelPriority);
        priorityContainer.appendChild(radioContainer);
    });

    const labelDate = document.createElement("label");
    labelDate.htmlFor = "due-date";
    labelDate.textContent = "Due Date: ";
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "due-date";
    inputDate.name = "due-date";
    const today = new Date().toISOString().split('T')[0];
    inputDate.min = today;
    dateContainer.appendChild(labelDate);
    dateContainer.appendChild(inputDate);

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.id = "task-submit";
    submitButton.textContent = "Submit";
    buttonContainer.appendChild(submitButton);


    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(priorityContainer);
    form.appendChild(dateContainer);
    form.appendChild(buttonContainer);


    formContent.appendChild(form);

    return formContent;
}

export {createProjectForm, createTaskForm}
