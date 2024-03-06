import { Bord, BordType } from "./bird.js";

export class Owl extends Bord {
    constructor() {
        super(BordType.owl);
        this.health = 2;
        this.speed = 1.5;
        this.img = "owl";
        this.score = 2;
    }
}