import { View } from "./view.js";
import { getRandomPackage } from "./Package.js";
import { ConveyorBelt } from "./conveyorBelt.js";

const parent = document.createElement('div');
const container = document.querySelector('#container');

let belts = [];
let packages = [];

export function init() {
    parent.style.position = "fixed";
    parent.style.bottom = "45%";
    parent.style.width = "100vw";
    container.appendChild(parent);

    createBelt();
    createPackage();   
}

export function update() {
    // MOVE THIS LOGIC TO BELTS BUT CALL IT HERE
    belts.forEach((belt) => {
        belt.packageList.forEach((packageBox) => {
            let div = packageBox.divObj;
            
            let currentTranslateX = window.getComputedStyle(div).transform;
            let currentTranslateXValue = parseInt(currentTranslateX.split(',')[4]) ? parseInt(currentTranslateX.split(',')[4]) : 0;
            let newTranslateXValue = currentTranslateXValue + 2;

            div.style.transform = 'translateX(' + newTranslateXValue + 'px)';

            if (newTranslateXValue >= screen.width) {
                div.remove();
                packages.pop(packageBox);
                createPackage();
            }
        })
    })
}

export function addBord(type) {
    const view = new View();
    container.appendChild(view.createBirdView(type));
}

function createBelt() {
    let beltObj = new ConveyorBelt(screen.width);
    let belt = document.createElement('div'); // CUSTOMIZE THIS

    belt.style.backgroundImage = "url('./img/conveyor-belt/belt.gif')";
    belt.style.backgroundSize = "contain"; 
    belt.style.backgroundColor = "orange";
    belt.style.height = "30px";
    belt.style.marginTop = "-46px";
    belt.style.padding = "10px";
    belt.style.position = "absolute";
    belt.style.width = "100vw";

    parent.appendChild(belt);

    beltObj.setDivObject(belt);
    belts.push(beltObj);
}

export function createPackage() {
    let packageObj = getRandomPackage();
    let packageBox = document.createElement('div'); // CUSTOMIZE THIS

    const img = document.createElement('img');
    img.src = 'img/conveyor-belt/package.png';
    img.style.width = packageObj.width * 3 + "px";
    img.style.height = packageObj.height * 3 + "px";
    img.style.filter = "hue-rotate(" + packageObj.color + "deg)";
    
    packageBox.appendChild(img);
    packageBox.style.width = packageObj.width * 3 + "px";
    packageBox.style.height = packageObj.height * 3 + "px";
    packageBox.style.marginTop = "-70px";
    packageBox.style.transform = 'translateX(' + -100 + 'px)';

    packageObj.setDivObject(packageBox);
    belts.forEach(belt => {
        belt.addPackage(packageObj)
    });
    packages.push(packageBox);

    parent.appendChild(packageBox);
}