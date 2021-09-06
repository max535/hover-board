const board = document.querySelector('#board');
const colors = ['#EB1D06', '#20AC82', '#0C6DC7', '#9FD312', '#FFD104', '#D103FA', '#68688F', '#03E6B4'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    //element.style.boxShadow = `0 0 2px ${color}`;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1D1D1D';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    // const index = Math.floor(Math.random() * colors.length);
    // return colors[index];

    return colors[Math.floor(Math.random() * colors.length)];
}