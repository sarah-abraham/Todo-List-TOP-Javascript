import "../styles/sidebar.css";
import PlusIcon from "../assets/plus-circle.svg"
function sidebarTitleFunction(){
    const sidebarTitleContainer = document.createElement("div");
    sidebarTitleContainer.className = "sidebar-title-container";

    const h2 = document.createElement("h2");
    h2.className = "sidebar-title";
    h2.textContent = "Project List";

    const newProjectButton = document.createElement("button");
    newProjectButton.className = "new-project-btn";
    const plus = new Image();
    plus.src = PlusIcon;
    plus.className = "icon";
    newProjectButton.appendChild(plus);
    const buttonText = document.createTextNode("New Project");
    newProjectButton.appendChild(buttonText);

    sidebarTitleContainer.appendChild(h2);
    sidebarTitleContainer.appendChild(newProjectButton);

    return sidebarTitleContainer;
}

const projectsContainer = document.createElement("div");
projectsContainer.className = "project-container";
function sidebarBodyFunction(projectName){
    const newProject = document.createElement("button");
    newProject.className = "new-project";
    newProject.textContent = projectName;

    // Create the cross symbol
    const cross = document.createElement("span");
    cross.className = "cross-icon";
    cross.innerHTML = "&times;"; 

    // Add an event listener to delete the button on click
    cross.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the button's click event from triggering
        projectsContainer.removeChild(newProject);
    });

    newProject.appendChild(cross);
    projectsContainer.append(newProject);
    return projectsContainer;
}


export {sidebarTitleFunction, sidebarBodyFunction}