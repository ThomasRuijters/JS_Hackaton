export class PackageColor {
    static red = "333";
    static orange = "307";
    static yellow = "7";
    static green = "78";
    static blue = "173";
    static purple = "234";
    static pink = "271";
}

export class Package {
    color;
    height;
    width;
    weight;
    points;
    divObj;
    constructor(color) {
        this.color = color;
    }

    setDivObject(div) {
        this.divObj = div;
    }
}

export function getRandomColor() {
    const colors = Object.values(PackageColor);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export function getRandomPackage() {
    const randomColor = getRandomColor();
    const pakketje = new Package(randomColor);
    pakketje.height = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    pakketje.width = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    const weight = Math.floor(Math.random() * (10 - 1)) + 1;
    pakketje.weight = weight;
    pakketje.points = weight;

    return pakketje;
}