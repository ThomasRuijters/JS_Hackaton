import { Bord, BordType } from "./bird";

export class Owl extends Bord {
    constructor() {
        super(BordType.owl);
        this.health = 3;
        this.speed = 1.5;
        this.img = "eagle.png";
    }
}