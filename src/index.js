console.log("Linked");
import {headerFunction} from './js/header.js';
import './styles/common.css';
import './styles/header.css';

function component(){
    const header = document.querySelector(".header");
    header.appendChild(headerFunction());
}

document.body.appendChild(component());