import { Game } from './game.js';

const pewAudio = new Audio('./audio/pew-effect.mp3');
const game = Game.getGame();

document.addEventListener('click', function(event) {
    pewAudio.play();
    const bird = event.target.bird;

    if(!bird) {
        return;
    }

    console.log(game);
    const gun = game.gun;
    gun.shoot(bird);

    if(bird.health <= 0) {
        document.getElementById('container')
            .removeChild(event.target);
        createExplosion(event);
    }
});

let counter = 0;

function createExplosion(event) {
    const img = document.createElement('img');
    img.src = './img/extra/bird-death-effect.gif';
    img.width = 100;
    img.height = 100;
    img.style.position = "absolute";
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    img.style.left = mouseX - 30 + 'px';
    img.style.top = mouseY - 60 + 'px';

    setTimeout(function() {
        img.remove();
    }, 1200);

    document.body.appendChild(img);
}

function moveDeathBird() {
    
}