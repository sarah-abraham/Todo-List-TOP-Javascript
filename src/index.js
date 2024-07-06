console.log("Linked");
import {headerFunction} from './js/header.js';
import { sidebarTitleFunction, sidebarBodyFunction} from './js/sidebar.js';
import {createCard, createButton} from './js/content.js';
import { createProjectForm, createTaskForm } from './js/popupform.js';
import './styles/common.css';
import './styles/header.css';

function component(){
    const header = document.querySelector(".header");
    header.appendChild(headerFunction());

    
    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(sidebarTitleFunction());
    const projectButton = document.querySelector(".new-project-btn");
    sidebar.appendChild(sidebarBodyFunction("Default"));


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
            sidebar.appendChild(sidebarBodyFunction(projectTitle.value));
            projectPopupForm.style.display = "none"; 
        });
        projectPopupForm.style.display = "block"; 
        const closeButton = document.querySelector("#project-close-button");
        closeButton.onclick = function() {
            projectPopupForm.style.display = "none";
        }
    
        
        window.onclick = function(event) {
            if (event.target == projectPopupForm) {
                projectPopupForm.style.display = "none";
            }
        }
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
            cardContainer.appendChild(createCard(formElements["task-title"], formElements["desc"], formElements["priority"], formElements["due-date"]));
            taskPopupForm.style.display = "none";
        });
        taskPopupForm.style.display = "block"; 

        
        const closeButton = document.querySelector("#task-close-button");
        closeButton.onclick = function() {
            taskPopupForm.style.display = "none";
        }

        
        window.onclick = function(event) {
            if (event.target == taskPopupForm) {
                taskPopupForm.style.display = "none";
            }
        }
    });
}

document.body.appendChild(component());

function getTaskFormValuesOnSubmit(formId, submitButtonId) {
   
}

// Example usage
getFormValuesOnSubmit("task-form", "task-submit");
