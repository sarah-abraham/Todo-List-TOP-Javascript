console.log("Linked");
import {headerFunction} from './js/header.js';
import { sidebarTitleFunction, sidebarBodyFunction} from './js/sidebar.js';
import {createCard, createButton} from './js/content.js';
import './styles/common.css';
import './styles/header.css';

function component(){
    const header = document.querySelector(".header");
    header.appendChild(headerFunction());

    
    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(sidebarTitleFunction());
    sidebar.appendChild(sidebarBodyFunction("Default"));
    sidebar.appendChild(sidebarBodyFunction("Today"));
    sidebar.appendChild(sidebarBodyFunction("Default"));
    sidebar.appendChild(sidebarBodyFunction("Today"));
    sidebar.appendChild(sidebarBodyFunction("Default"));
    sidebar.appendChild(sidebarBodyFunction("Today"));
    sidebar.appendChild(sidebarBodyFunction("Default"));
    sidebar.appendChild(sidebarBodyFunction("Today"));
    sidebar.appendChild(sidebarBodyFunction("Default"));
    sidebar.appendChild(sidebarBodyFunction("Today"));
    sidebar.appendChild(sidebarBodyFunction("Default"));
    sidebar.appendChild(sidebarBodyFunction("Today"));
    // sidebar.appendChild(sidebarBodyFunction("Default"));
    // sidebar.appendChild(sidebarBodyFunction("Today"));



    const content = document.querySelector(".content");
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container"
    buttonContainer.appendChild(createButton());
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    cardContainer.appendChild(createCard("Go to market", "Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff. Go to market to buy stuff.", "HIGH", "03/07/2024"));
    content.appendChild(cardContainer);
    content.appendChild(buttonContainer);
}

document.body.appendChild(component());