export default function birdViewFactory(bird) {
    const elem = document.createElement('div');
    elem.classList.add('bord');
    const img = document.createElement('img');
    img.src = 'img/pigeons' + bird.img;

    elem.appendChild(img);
}