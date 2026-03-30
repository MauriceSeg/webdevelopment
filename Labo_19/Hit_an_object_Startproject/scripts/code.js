let global = {
    IMAGE_COUNT: 4, // 0 t.e.m. 3
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    score: 0,
    timeoutId: null,
    lastX: -1,
    lastY: -1
};

const target = document.getElementById("target");
const playField = document.getElementById("playField");
const scoreSpan = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

function startGame() {
    global.score = 0;
    scoreSpan.textContent = 0;

    target.style.display = "block";

    moveTarget();
    nextMove();
}

function nextMove() {
    let delay = 2000 + Math.random() * 1200;

    global.timeoutId = setTimeout(() => {
        moveTarget();
        nextMove();
    }, delay);
}

function moveTarget() {
    let maxX = playField.clientWidth - global.IMAGE_SIZE;
    let maxY = playField.clientHeight - global.IMAGE_SIZE;

    let x, y;

    do {
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);
    } while (x === global.lastX && y === global.lastY);

    global.lastX = x;
    global.lastY = y;

    target.style.left = x + "px";
    target.style.top = y + "px";

    // 🎯 juiste random afbeelding (0 = bom!)
    let index = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;

    // bom check aanpassen
    target.dataset.type = (index === 0) ? "bomb" : "good";
}

target.addEventListener("click", () => {
    if (target.dataset.type === "bomb") {
        clearTimeout(global.timeoutId);
        target.style.display = "none";
        alert("Game Over!");
    } else {
        global.score++;
        scoreSpan.textContent = global.score;

        moveTarget(); // direct verplaatsen
    }
});

startBtn.addEventListener("click", startGame);