// Source (with minor tweaks): https://codepen.io/nelsonr/pen/WNQaZPb

function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(img, ev) {
    let imgRect = img.getBoundingClientRect();
    let width = imgRect.width;
    let height = imgRect.height;
    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;
    let rotateY = map(mouseX, 0, width, -30, 30);
    let rotateX = map(mouseY, 0, height, 30, -30);
    let brightness = map(mouseY, 0, height, 1.3, 0.7);

    img.style.transform = `scale(1.3) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
}

var cards = document.querySelectorAll('.card3d');

cards.forEach((img) => {

    img.addEventListener('mousemove', (ev) => {
        Card3D(img, ev);
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(1)';
    });

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.3)';
    });
});
