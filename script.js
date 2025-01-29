// 1. Function with parameters and return value
function calculateArea() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    if (length > 0 && width > 0) {
        let area = length * width;
        document.getElementById("result").innerText = `Area: ${area}`;
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers!";
    }
}

// 2. Function demonstrating scope (global & local variables)
let globalMessage = "Hello from the global scope!"; // Global variable

function showScopeExample() {
    let localMessage = "Hello from the local scope!"; // Local variable
    console.log(globalMessage); // Accessible
    console.log(localMessage); // Accessible inside function only
}

showScopeExample(); // Call function to test scope

// 3. Function to toggle modal visibility
function toggleModal() {
    let modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
}

// Event listener for modal button
document.getElementById("modalBtn").addEventListener("click", toggleModal);

// 4. Function to trigger and reset animation
function animateBox() {
    let box = document.getElementById("dynamicBox");
    
    // Remove the animation class if it exists (to reset it)
    box.classList.remove("bounce");
    
    // Use setTimeout to re-add the class after a brief delay
    setTimeout(() => {
        box.classList.add("bounce");
    }, 10);
}

// Event listener for animation button
document.getElementById("animateBtn").addEventListener("click", animateBox);
