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
    projectsContainer.append(newProject);
    return projectsContainer;
}


export {sidebarTitleFunction, sidebarBodyFunction}