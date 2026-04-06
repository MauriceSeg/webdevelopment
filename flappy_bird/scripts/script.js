const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bird
let bird = {
    x: 80,
    y: 150,
    width: 30,
    height: 30,
    gravity: 0.6,
    lift: -10,
    velocity: 0
};

// Pipes
let pipes = [];
let frame = 0;
let score = 0;

// Controls
document.addEventListener("keydown", () => {
    bird.velocity = bird.lift;
});

// Game loop
function update() {
    frame++;

    // Bird physics
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Ground / ceiling collision
    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        resetGame();
    }

    // Add pipes
    if (frame % 90 === 0) {
        let gap = 200;
        let topHeight = Math.random() * 300 + 50;
        pipes.push({
            x: canvas.width,
            width: 50,
            top: topHeight,
            bottom: canvas.height - topHeight - gap
        });
    }

    // Move pipes
    pipes.forEach((pipe, index) => {
        pipe.x -= 2;

        // Collision
        if (
            bird.x < pipe.x + pipe.width &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.top || bird.y + bird.height > canvas.height - pipe.bottom)
        ) {
            resetGame();
        }

        // Score
        if (pipe.x + pipe.width === bird.x) {
            score++;
        }

        // Remove off-screen pipes
        if (pipe.x + pipe.width < 0) {
            pipes.splice(index, 1);
        }
    });
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bird
    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

    // Pipes
    ctx.fillStyle = "green";
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
        ctx.fillRect(pipe.x, canvas.height - pipe.bottom, pipe.width, pipe.bottom);
    });

    // Score
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

// Reset game
function resetGame() {
    bird.y = 150;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    frame = 0;
}

// Main loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();