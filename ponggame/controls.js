window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.code;
    // console.log(`KEYDOWN: ${key}`);

    switch (key) {
        case "KeyW":
            model.paddleL.vely = -PADDLE_VELOCITY;
            break;
        case "KeyS":
            model.paddleL.vely = PADDLE_VELOCITY;
            break;
        case "ArrowUp":
            model.paddleR.vely = -PADDLE_VELOCITY;
            break;
        case "ArrowDown":
            model.paddleR.vely = PADDLE_VELOCITY;
            break;
        case "End":
            model.resetGame();
            break;
    }
}

window.addEventListener("keyup", keyUp);
function keyUp(event) {
    const key = event.code;
    // console.log(`KEYUP: ${key}`);

    switch (key) {
        case "ArrowUp":
        case "ArrowDown":
            model.paddleR.vely = 0;
            break;
        case "KeyW":
        case "KeyS":
            model.paddleL.vely = 0;
            break;


    }
}

function resetGame() {
    model.scoreR=0;
    model.ScoreL=0;
    model.resetGame();
    onTick();
}

function set_cpu(event) {
    model.is_cpu = event.target.checked;
}

function double_cpu(event) {
    model.is_cpu = event.target.checked;
    model.double_cpu = event.target.checked;
    set_cpu = false;
}