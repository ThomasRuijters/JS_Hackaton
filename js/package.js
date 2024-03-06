export class PackageColor {
    static red = "#d6271e";
    static orange = "#d67a1e";
    static yellow = "#d2d90f";
    static green = "#38d415";
    static blue = "#156bd4";
    static purple = "#8b15d4";
    static pink = "#d415c1";
}

export class Package {
    color;
    height;
    width;
    weight;
    points;
    constructor(color) {
        this.color = color;
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