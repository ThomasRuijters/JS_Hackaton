import { Bord, BordType } from "./bird";

export class pigeon extends Bord {
    constructor() {
        super(BordType.pigeon);
        this.health = 3;
        this.speed = 1;
        this.img = "pigeon.png";
    }
}