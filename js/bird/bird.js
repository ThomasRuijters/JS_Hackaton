export class Bord {
    type;
    img;
    speed;
    health;
    package;

    constructor(type) {
        this.type = type;
    }

    grabPackage() {

    }
    dropPackage() {

    }
    kill() {

    }
}

export class BordType {
    static pigeon = "pigeon";
    static eagle = "eagle";
    static owl = "owl";
}