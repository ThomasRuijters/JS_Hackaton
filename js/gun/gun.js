
export class Gun {
    damage = 0;
    img;
    constructor() {

    }

    shoot(bird) {
        bird.damage(this.damage);
    }
}