import { Bord, BordType } from "./bird";

export class Eagle extends Bord {
    constructor() {
        super(BordType.eagle);
        this.health = 3;
        this.speed = 1.5;
        this.img = "eagle.png";
    }
}