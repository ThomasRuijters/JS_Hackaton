import { Game } from "./game.js";
import { WeakPistol } from "./gun/pistol.js";


export class View {
    static #counter;

    static changeCounter() {
        this.#counter.innerText = Game.getGame().score;
    }
    
    constructor() {
        document.addEventListener('mousemove', (event) => {
            const elem = document.getElementById("gunContainer");
            const x = elem.x;
            elem.style.left = event.clientX - 200 + 'px';
        })
    }

    createMainView() {
        const elem = document.createElement('div');
        elem.classList.add('game-ui');
        elem.style.zIndex = -1;
        
        const counter = this.#createScoreCounter();
        elem.appendChild(counter);
        
        elem.appendChild(this.setGunView(new WeakPistol()));

        return elem;
    }
    #createScoreCounter() {
        const scoreContainer = document.createElement('p');
        scoreContainer.id = "score-text";
        scoreContainer.innerText = "Score = ";
        
        const counter = document.createElement('span');
        counter.style.color = "red";
        counter.style.fontWeight = "bold";
        counter.innerText = Game.getGame().score;

        View.#counter = counter;

        scoreContainer.appendChild(counter);

        return scoreContainer;
    }

    createBirdView(bird) {
        const elem = document.createElement('div');
        elem.classList.add('bord');
        
        elem.style.backgroundImage = 'url(img/pigeons/' + bird.img + ".gif)";
        elem.bird = bird;
    
        return elem;
    }

    setGunView(gun) {
        const elem = document.createElement('div');
        elem.id = "gunContainer";
        elem.classList.add('gun');
        
        elem.style.backgroundImage = 'url(img/guns/' + gun.img + ".gif)";
        elem.style.bottom = '-200px';
        elem.style.left = 'calc(50vw - 200px)';
        elem.gun = gun;
        
    
        return elem;
    }
}