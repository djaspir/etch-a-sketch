const container = document.getElementById("container");
const range = document.getElementById("range")

const setGridArea = (area = 16) => {
    container.style.setProperty('--grid-rows', area);
    container.style.setProperty('--grid-cols', area);

    for (c = 0; c < (area ** 2); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
};

function resetGrid() {
    document
        .querySelectorAll(".grid-item")
        .forEach((e) => e.parentNode.removeChild(e));
}

function handleRange(e) {
    resetGrid();
    setGridArea(e.target.value);
}

range.onclick = (e) => handleRange(e);

window.onload = () => {
    setGridArea();
}









