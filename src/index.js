console.log("Linked");
import { headerFunction } from './js/header.js';
import { sidebarTitleFunction, sidebarBodyFunction } from './js/sidebar.js';
import { createCard, createButton } from './js/content.js';
import { createProjectForm, createTaskForm } from './js/popupform.js';
import './styles/common.css';
import './styles/header.css';




function component() {
    const header = document.querySelector(".header");
    header.appendChild(headerFunction());

    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(sidebarTitleFunction());

    const projectsContainer = document.createElement("div");
    projectsContainer.className = "projects-container";
    sidebar.appendChild(projectsContainer);

    const projectButton = document.querySelector(".new-project-btn");
    projectsContainer.appendChild(sidebarBodyFunction("Default"));

    const content = document.querySelector(".content");
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    const taskButton = createButton();
    buttonContainer.appendChild(taskButton);

    content.appendChild(cardContainer);
    content.appendChild(buttonContainer);

    const projectPopupForm = document.querySelector("#project-popup-form");
    const taskPopupForm = document.querySelector("#task-popup-form");
    if (!taskPopupForm || !projectPopupForm) {
        console.error("Popup form element not found");
        return;
    }

   
    

    projectButton.addEventListener('click', () => {
        createProjectForm();
        const projectSubmit = document.querySelector("#project-submit");
        const projectTitle = document.querySelector("#project-title");
        projectSubmit.addEventListener('click', () => {
            const projectName = projectTitle.value;
            sidebar.appendChild(sidebarBodyFunction(projectName));
            projectPopupForm.style.display = "none";
        });

        projectPopupForm.style.display = "block";
        const closeButton = document.querySelector("#project-close-button");
        closeButton.onclick = function () {
            projectPopupForm.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == projectPopupForm) {
                projectPopupForm.style.display = "none";
            }
        };
    });

    taskButton.addEventListener('click', () => {
        createTaskForm();
        const taskSubmit = document.querySelector("#task-submit");
        const form = document.querySelector(".task-form-container form");

        taskSubmit.addEventListener('click', () => {
            const formData = new FormData(form);
            const formElements = {};

            formData.forEach((value, key) => {
                formElements[key] = value;
            });

            console.log("Form Elements:", formElements);

            // Find the selected project from the sidebar
            const selectedProjectElement = document.querySelector(".sidebar-item-selected");
            const selectedProject = selectedProjectElement ? selectedProjectElement.dataset.projectName : "Default";

            // Append the card to the main card container
            cardContainer.appendChild(createCard(formElements["task-title"], formElements["desc"], formElements["priority"], formElements["due-date"], selectedProject));

            taskPopupForm.style.display = "none";
        });

        taskPopupForm.style.display = "block";

        const closeButton = document.querySelector("#task-close-button");
        closeButton.onclick = function () {
            taskPopupForm.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == taskPopupForm) {
                taskPopupForm.style.display = "none";
            }
        };
    });
}

document.body.appendChild(component());

// Example usage
// getFormValuesOnSubmit("task-form", "task-submit");
