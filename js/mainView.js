import { View } from "./view.js";

const container = document.querySelector('#container');
let belts = [];
let packages = [];

export function init() {
    createBelt();
    createPackage();   
}

export function update() {

    // MOVE THIS LOGIC TO BELTS BUT CALL IT HERE
    packages.forEach((packageBox) => {
        let currentTranslateX = window.getComputedStyle(packageBox).transform;
        let currentTranslateXValue = parseInt(currentTranslateX.split(',')[4]) ? parseInt(currentTranslateX.split(',')[4]) : 0;
        let newTranslateXValue = currentTranslateXValue + 2;

        packageBox.style.transform = 'translateX(' + newTranslateXValue + 'px)';

        if (newTranslateXValue >= 600) {
            packageBox.remove();
            packages.pop(packageBox);
            createPackage();
        }
    })
}

export function addBord(type) {
    const view = new View();
    container.appendChild(view.createBirdView(type));
}

function createBelt() {
    let belt = document.createElement('div'); // CUSTOMIZE THIS

    belt.style.backgroundColor = "red";
    belt.style.padding = "10px";

    container.appendChild(belt)
    belts.push(belt);
}

export function createPackage() {
    let packageBox = document.createElement('div'); // CUSTOMIZE THIS
    
    packageBox.style.backgroundColor = "blue";
    packageBox.style.padding = "10px";
    packageBox.style.width = "10px";
    packageBox.style.height = "10px";

    belts.forEach(belt => {
        belt.appendChild(packageBox)
    });

    packages.push(packageBox);
}