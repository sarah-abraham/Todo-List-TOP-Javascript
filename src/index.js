console.log("Linked");
import {headerFunction} from './js/header.js';
import { sidebarTitleFunction, sidebarBodyFunction} from './js/sidebar.js';
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
}

document.body.appendChild(component());