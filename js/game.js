import { WeakPistol } from "./gun/pistol.js";

export class Game {
    static #game;
    gun;
    belt;
    birds;
    packages;

    constructor() {
        Game.#game = this;
        this.gun = new WeakPistol();
    }

    static getGame() {
        
        if(!this.#game) {
            this.#game = new Game();
        }

        return Game.#game;
    }
}