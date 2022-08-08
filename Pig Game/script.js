'use strict';
//Player Selection
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
//Score Selection
const player0Score = document.querySelector(`#score--0`);
const player1Score = document.querySelector(`#score--1`);
//Current Score Selection
const currentScore0 = document.querySelector(`#current--0`);
const currentScore1 = document.querySelector(`#current--1`);
//Dice image Selection
const diceImage = document.querySelector(`.dice`);
//Buttons Selection
const btnNewGame = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
//Current Score Holder
let currentScore = 0;
//Hide Dice 
diceImage.classList.add(`hidden`);
//Hold Current Player
let activePlayer = 0;
//Array to hold scores
let scores = [0, 0];
//state Variable
let playing = true;
//Function to switch players
function switchPlayers() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    //Switch Player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
}
//Button Roll Functionality
btnRoll.addEventListener(`click`, () => {
    if (playing) {
        //Generate random dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        //Show Dice Image
        diceImage.classList.remove(`hidden`);
        //Generate Dice Image
        diceImage.src = `dice-${dice}.png`;
        //Update current score
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayers();
        }
    }
});
//Button Hold Fucntionality
btnHold.addEventListener(`click`, () => {
    if (playing) {
        scores[activePlayer] += currentScore;
        //add score to score label
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //if score >=100
        // then active player wins
        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
            diceImage.classList.add(`hidden`);
            playing = false;
        } else {
            //else switch player
            switchPlayers();
        }
    }
});
//Button New Game Functionality
btnNewGame.addEventListener(`click`, () => {
    scores = [0, 0];
    console.table(scores);
    playing = true;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
    document.querySelector(`.player--0`).classList.add(`player--active`);
    diceImage.classList.remove(`hidden`);
    activePlayer = 0;
    player0Score.textContent = currentScore;
    player1Score.textContent = currentScore;
    currentScore0.textContent = currentScore;
    currentScore1.textContent = currentScore;


});





















