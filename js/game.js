import { WeakPistol } from "./gun/pistol.js";

export class Game {
    static #game;
    gun;
    belt;
    birds;
    packages;
    score;

    constructor() {
        Game.#game = this;
        this.gun = new WeakPistol();
        this.score = 0;
    }

    static getGame() {
        
        if(!this.#game) {
            this.#game = new Game();
        }

        return Game.#game;
    }
}