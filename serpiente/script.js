const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

function drawGame() {
    changeSnakePosition();
    let result = isGameOver();
    if (result) {
        return;
    }

    clearScreen();
    checkAppleCollision();
    drawApple();
    drawSnake();
    setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
    // Añade la lógica de "game over" aquí
    return false;
}

function clearScreen() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'green';
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakeParts.push({ x: headX, y: headY });
    while (snakeParts.length > tailLength) {
        snakeParts.shift();
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
    headX += xVelocity;
    headY += yVelocity;
}

function drawApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
    if (appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    // Arriba
    if (event.keyCode == 38) {
        if (yVelocity == 1) return;
        yVelocity = -1;
        xVelocity = 0;
    }

    // Abajo
    if (event.keyCode == 40) {
        if (yVelocity == -1) return;
        yVelocity = 1;
        xVelocity = 0;
    }

    // Izquierda
    if (event.keyCode == 37) {
        if (xVelocity == 1) return;
        xVelocity = -1;
        yVelocity = 0;
    }

    // Derecha
    if (event.keyCode == 39) {
        if (xVelocity == -1) return;
        xVelocity = 1;
        yVelocity = 0;
    }
}

drawGame();