export class GameScore {
    constructor() {
        this.score = 0;
    }
}

export let score = new GameScore();
export const scoreText = document.querySelector('#score-text');

export function addScore(amount) {
    score.score += amount;
    scoreChanged();
}

export function removeScore(amount) {
    addScore(-amount);
}

export function setScore(amount) {
    score.score = amount;
    scoreChanged();
}

function scoreChanged() {
    scoreText.textContent = "Score: " + score.score;
}
