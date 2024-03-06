class Crosshair {
    constructor(crosshairImage) {
        this.crosshairImage = crosshairImage;
    }
}

const pewAudio = new Audio('./audio/pew-effect.mp3');

document.addEventListener('click', function(event) {
    pewAudio.play();
});

main();