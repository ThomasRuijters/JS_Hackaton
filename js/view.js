export class View {
    constructor() {
        
    }

    createBirdView(bird) {
        const elem = document.createElement('div');
        elem.classList.add('bord');
        
        elem.style.backgroundImage = 'url(img/pigeons/' + bird.img + ".gif)";
        elem.bird = bird;
    
        return elem;
    }

    createGunView(gun) {
        const elem = document.createElement('div');
        elem.classList.add('gun');
        
        elem.style.backgroundImage = 'url(img/guns/' + gun.img + ".gif)";
        elem.gun = gun;
    
        return elem;
    }
} 