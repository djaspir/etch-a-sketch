const DEFAULT_COUNTER = 0;

let counter = DEFAULT_COUNTER;

const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid-item")
const range = document.getElementById("range")

range.onclick = (e) => handleRange(e);

function setGridArea(area = 16) {
    container.style.setProperty('--grid-rows', area);
    container.style.setProperty('--grid-cols', area);

    for (c = 0; c < (area ** 2); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor)
        container.appendChild(cell).className = "grid-item";
    }
};

function changeColor(e) {
    if (counter < 10) {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        e.target.style = `background: rgb(${R}, ${G}, ${B})`;
    } else {
        e.target.style = `background: #111`;
        counter = DEFAULT_COUNTER;
    }
    counter++;
}

function resetGrid() {
    document
        .querySelectorAll(".grid-item")
        .forEach((e) => e.parentNode.removeChild(e));
}

function handleRange(e) {
    resetGrid();
    setGridArea(e.target.value);
}

window.onload = () => {
    setGridArea();
}









