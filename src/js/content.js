import "../styles/content.css";
import PlusIcon from "../assets/plus-circle-white.svg";

function createCard(title, description, priority, due){
    const card = document.createElement("div");
    card.className = "card";
    const h3Title = document.createElement("h3");
    h3Title.textContent = "Title: "+title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "✖"; // Unicode character for cross

    // Add event listener to delete the card when clicked
    deleteButton.addEventListener("click", () => {
        card.remove();
    });


    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "description-container";
    const h3Description = document.createElement("h3");
    h3Description.textContent = "Description: "
    const p = document.createElement("p");
    p.textContent = description;
    descriptionContainer.appendChild(h3Description);
    descriptionContainer.appendChild(p);

    const priorityContainer = document.createElement("div");
    priorityContainer.className = "priority-container";
    const h3Priority = document.createElement("h3");
    h3Priority.textContent = "Priority: ";
    const priorityText = document.createElement("p");
    priorityText.textContent = priority;
    priorityContainer.appendChild(h3Priority);
    priorityContainer.appendChild(priorityText);

    const date = document.createElement("div");
    const h3Date = document.createElement("h3");
    h3Date.textContent = "Due: "+due;
    date.appendChild(h3Date);

    card.appendChild(h3Title);
    card.appendChild(deleteButton);
    card.appendChild(descriptionContainer);
    card.appendChild(priorityContainer);
    card.appendChild(date);

    return card
}


function createButton(){
    const button = document.createElement("button");
    button.className = "task-btn";
    const plus = new Image();
    plus.src = PlusIcon;
    plus.className = "icon";
    button.appendChild(plus);
    const buttonText = document.createTextNode("Add new Task");
    button.appendChild(buttonText);
    return button;
}
export {createCard, createButton}