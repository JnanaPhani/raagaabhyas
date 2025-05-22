// Basic JavaScript - feel free to modify
console.log("Script.js loaded!");

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
        console.log("App container found:", appContainer);
        // You can manipulate the app-container here
        // For example:
        // const newParagraph = document.createElement('p');
        // newParagraph.textContent = 'This paragraph was added by JavaScript!';
        // appContainer.appendChild(newParagraph);
    } else {
        console.error("App container not found!");
    }
});