export class Bord {
    type;
    img;
    speed;
    health;
    package;
    score;

    constructor(type) {
        this.type = type;
    }

    grabPackage() {

    }
    dropPackage() {

    }
    damage(damage) {
        this.health -= damage;
    }
}

export class BordType {
    static pigeon = "pigeon";
    static eagle = "eagle";
    static owl = "owl";
}