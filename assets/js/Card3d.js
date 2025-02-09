// This code is a slightly modified version of this: https://codepen.io/nelsonr/pen/WNQaZPb

function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function apply_3D_Card_Effect(card, ev) {
    let imgRect = card.getBoundingClientRect();

    let width = imgRect.width;
    let height = imgRect.height;

    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;

    let rotateY = map(mouseX, 0, width, -30, 30);
    let rotateX = map(mouseY, 0, height, 30, -30);

    let brightness = map(mouseY, 0, height, 1.3, 0.7);

    card.style.transform = `scale(1.3) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.filter = `brightness(${brightness})`;
}

const cards = document.querySelectorAll('.card3d');

cards.forEach((card) => {

    // User hovers over a card
    card.addEventListener('mousemove', (ev) => {
        apply_3D_Card_Effect(card, ev);
    });

    // User stops hovering over a card
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.filter = 'brightness(1)';
    });
});
