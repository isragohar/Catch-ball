// script.js
document.addEventListener('DOMContentLoaded', () => {
    const game = document.getElementById('game');
    const paddle = document.getElementById('paddle');
    const ball = document.getElementById('ball');

    let paddleX = game.clientWidth / 2 - paddle.clientWidth / 2;
    let ballY = 0;
    let ballFalling = true;

    // Move paddle with arrow keys
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            paddleX -= 20;
            if (paddleX < 0) paddleX = 0;
        } else if (event.key === 'ArrowRight') {
            paddleX += 20;
            if (paddleX + paddle.clientWidth > game.clientWidth) paddleX = game.clientWidth - paddle.clientWidth;
        }
        paddle.style.left = `${paddleX}px`;
    });

    // Ball falling logic
    function updateBall() {
        if (ballFalling) {
            ballY += 5;
            if (ballY + ball.clientHeight >= game.clientHeight - paddle.clientHeight) {
                if (paddleX < ball.offsetLeft && ball.offsetLeft < paddleX + paddle.clientWidth) {
                    ballFalling = false;
                    ballY = game.clientHeight - paddle.clientHeight - ball.clientHeight;
                    alert('You caught the ball!');
                }
            }
            if (ballY + ball.clientHeight >= game.clientHeight) {
                ballFalling = false;
                alert('Game Over!');
            }
        }
        ball.style.top = `${ballY}px`;
        if (ballFalling) {
            requestAnimationFrame(updateBall);
        }
    }

    updateBall();
});
