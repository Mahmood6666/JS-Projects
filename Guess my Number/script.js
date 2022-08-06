'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(`.score`).textContent = score;

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.message`).textContent = `Start guessing`;
  document.querySelector(`.guess`).value = ``;
  score = 20;
  document.querySelector(`.score`).textContent = `20`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    document.querySelector(`.message`).textContent = `Wrong Input`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Guess`;
    score++;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Guessed too High`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Loose`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Guessed too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Loose`;
    }
  }
});
console.log(score);
