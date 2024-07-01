import ListIcon from '../assets/format-list-checks.svg'
function headerFunction(){
    const header = document.createElement("header");
    header.className = "title-bar";
    const img = new Image();
    img.src = ListIcon;
    img.className = "icon";
    const h1 = document.createElement("h1");
    h1.className = "title";
    h1.textContent = "To-do List";
    header.appendChild(img);
    header.appendChild(h1);
    return header;
}

export {headerFunction}