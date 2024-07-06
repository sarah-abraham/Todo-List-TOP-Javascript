import "../styles/sidebar.css";
import PlusIcon from "../assets/plus-circle.svg"


function filterCardsByProject(projectName) {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => {
        if (card.dataset.projectName === projectName) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


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
    newProject.className = `${projectName}-sidebar-item sidebar-item`;
    newProject.dataset.projectName = projectName;
    newProject.textContent = projectName;

    const cross = document.createElement("span");
    cross.className = "cross-icon";
    cross.innerHTML = "&times;"; 

    
    cross.addEventListener("click", function(event) {
        event.stopPropagation();
        projectsContainer.removeChild(newProject);
    });

    newProject.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('sidebar-item-selected');
        });
        newProject.classList.add('sidebar-item-selected');
        
        filterCardsByProject(projectName);
    });

    newProject.appendChild(cross);
    projectsContainer.append(newProject);
    return projectsContainer;
}


export {sidebarTitleFunction, sidebarBodyFunction}