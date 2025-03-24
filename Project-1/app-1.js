let body = document.body;

// Get all the button with their Id.
let btn_1 = document.getElementById('btn-1');
let btn_2 = document.getElementById('btn-2');
let btn_3 = document.getElementById('btn-3');
let btn_4 = document.getElementById('btn-4');

let activeButton = null;  // Keeps track of which button is active

btn_1.addEventListener("click", () => {
    toggleBackground('btn-1', 'rgb(105, 105, 105)');
});

btn_2.addEventListener("click", () => {
    toggleBackground('btn-2', 'rgb(255, 250, 250)');
});

btn_3.addEventListener("click", () => {
    toggleBackground('btn-3', 'blue');
});

btn_4.addEventListener("click", () => {
    toggleBackground('btn-4', 'yellow');
});

function toggleBackground(buttonId, color) {
    if (activeButton === buttonId) {
        // Same button clicked again -> reset background
        body.style.backgroundColor = '#111';  // original state
        activeButton = null;
    } else {
        // Different button clicked -> set new color
        body.style.backgroundColor = color;
        activeButton = buttonId;
    }
};