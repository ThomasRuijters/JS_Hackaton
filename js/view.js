export class View {
    constructor() {
        
    }

    createBirdView(bird) {
        const elem = document.createElement('div');
        elem.classList.add('bord');
        const img = document.createElement('img');
        img.src = 'img/pigeons/' + bird.img + ".gif";
    
        elem.appendChild(img);

        return elem;
    }
} 