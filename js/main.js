// Get the grid container
const container = document.getElementById("container-right")
// Get the input range element
const range = document.getElementById("range")

// Set the Grid Area function
const setGridArea = (rows = 16, cols = 16) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
};

// Reset Grid
const reset = () => {
    document
        .querySelectorAll(".grid-item")
        .forEach((e) => e.parentNode.removeChild(e));
}

// Run function on load
setGridArea(16, 16);

// Add event lister to range input
range.addEventListener("change", (e) => {
    const rows = e.target.value;
    const cols = e.target.value;

    reset();
    setGridArea(rows, cols);
})
