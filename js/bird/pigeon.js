import { Bord, BordType } from "./bird.js";

export class Pigeon extends Bord {
    constructor() {
        super(BordType.pigeon);
        this.health = 1;
        this.speed = 1;
        this.img = "pigeon";
        this.score = 1;
    }
}