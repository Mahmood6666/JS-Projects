'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.score`).textContent = score;

//try again

document.querySelector(`.again`).addEventListener(`click`, function () {
    displayMessage(`Start guessing...`);
    document.querySelector(`.guess`).value = ``;
    score = 20;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`body`).style.backgroundColor = `rgb(20, 20, 20)`;
    document.querySelector(`.number`).style.width = `15rem`;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});

//Check if the guess is true or not
document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    //if guess is not a valid input
    if (!guess) {
        displayMessage(`Wrong Input`);
    }
    //if guess is correct
    else if (guess === secretNumber) {
        displayMessage(`Correct Guess`);
        score++;
        document.querySelector(`.number`).style.width = `32rem`;
        document.querySelector(`body`).style.backgroundColor = `green`;
        document.querySelector(`.score`).textContent = score;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //if guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too High` : `Too Low`);
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = `You Loose!`;
            score = 0;
            document.querySelector(`.score`).textContent = score;


        }
    }
});
