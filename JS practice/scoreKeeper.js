const firstButton = document.querySelector('#player1');
const secondButton = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const p1Score = document.querySelector('#p1score');
const p2Score = document.querySelector('#p2score');
const winningScoreElement = document.querySelector('#gameof');
let score1 = 0;
let score2 = 0;
let winningScore = 3;
let gameOver = false;

firstButton.addEventListener('click', function() {
    if(!gameOver){
    score1 += 1;
    // doesn't continue if score 1 has reached upto the winning score
        if (score1 === winningScore) {
            gameOver = true;
            // adds a class of winner and loser that contain different font colors
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
        }
        // doesn't continue to this line due to the indentation once the gameover is no longer false
        p1Score.textContent = score1;
    }
})

secondButton.addEventListener('click', function() {
    if(!gameOver){
    score2 += 1;
        if(score2 === winningScore) {
            gameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
        }
        p2Score.textContent = score2;
    }
})

// reset button upon click runs the function reset
resetButton.addEventListener('click', reset)

// created a function named reset 
function reset () {
    score1 = 0;
    score2 = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    gameOver = false;
    // removes the font color classes whichever were applied
    p1Score.classList.remove('winner', 'loser');
    p2Score.classList.remove('loser', 'winner');
}

winningScoreElement.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    // calls the reset function if winning score is changed
    reset()
})
