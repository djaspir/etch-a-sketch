// Get the grid container
const container = document.getElementById("container-right")

// Set the Grid Area function
const setGridArea = ((rows = 16, cols = 16) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
})();
