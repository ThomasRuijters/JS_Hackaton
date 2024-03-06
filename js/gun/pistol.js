import { Gun } from "./gun.js";

export class WeakPistol extends Gun {
    constructor() {
        super();
        this.damage = 1;
        this.img = 'pistol2';
    }
}