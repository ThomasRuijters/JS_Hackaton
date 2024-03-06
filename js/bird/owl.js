import { Bord, BordType } from "./bird.js";

export class Owl extends Bord {
    constructor() {
        super(BordType.owl);
        this.health = 3;
        this.speed = 1.5;
        this.img = "owl";
    }
}