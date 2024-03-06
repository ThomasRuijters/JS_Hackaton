import { View } from "./view.js";
import { getRandomPackage } from "./Package.js";

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

        if (newTranslateXValue >= screen.width) {
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
    let packageObj = getRandomPackage();
    
    let packageBox = document.createElement('div'); // CUSTOMIZE THIS

    const img = document.createElement('img');
    img.src = 'img/conveyor-belt/package.png';
    img.style.width = '100%';
    packageBox.appendChild(img);

    
    packageBox.style.width = "60px";
    packageBox.style.height = "60px";
    packageBox.style.transform = 'translateX(' + -100 + 'px)';

    belts.forEach(belt => {
        belt.appendChild(packageBox)
    });

    packages.push(packageBox);
}