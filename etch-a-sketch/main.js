// Get the element holding the grid
const gridContainer = document.getElementById("grid-container");

// Get the range slider element
const slider = document.getElementById("size");

// Every time the slider value changes when the mouse is released, generate the board size
slider.onchange = function () {
  generateBoard(this.value);
};

// Set the default value of the slider to 16
slider.value = 16;

// Add CSS to a cell to make its background black
const highlightCell = (e) => {
  e.target.classList.add("highlight");
};

// Populate the grid container with divs
function generateBoard(size) {
  gridContainer.innerHTML = ""; // Delete all child nodes within the game container
  gridContainer.style.gridTemplateColumns = `repeat(${size}, minmax(0,1fr))`; // Update grid size
  gridContainer.style.gridTemplateRows = `repeat(${size}, minmax(0,1fr))`; // Update grid size
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div"); // Create a new element to be added to the grid
    cell.classList.add("cell"); // Give the grid item a css class for styling
    cell.addEventListener("mouseover", highlightCell); // Add an event listener to call the callback function once the mouseover event is triggered
    gridContainer.appendChild(cell); // Add the element to the grid
  }
}

// Remove the CSS class "highlight" from the cell div element
function clearSketch() {
  let cells = document.querySelectorAll("#grid-container div");
  cells.forEach((cell) => {
    cell.classList.remove("highlight");
  });
}

generateBoard(16);
