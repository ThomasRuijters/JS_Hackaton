const container = document.querySelector('#container');

let belts = [];

export function init() {
    createBelt();
    createPackage();
    
}

function createBelt() {
    let belt = document.createElement('div');

    belt.style.backgroundColor = "red";
    belt.style.padding = "10px";

    container.appendChild(belt)
    belts.push(belt);
}

function createPackage() {
    let packageBox = document.createElement('div');
    
    packageBox.style.backgroundColor = "blue";
    packageBox.style.padding = "10px";
    packageBox.style.width = "10px";
    packageBox.style.height = "10px";

    belts.forEach(belt => {
        belt.appendChild(packageBox)
    });
}