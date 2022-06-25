// make objects of player 1 and 2 with their respective scores, buttons, and display

const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#p1score')
}

const p2 =  {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#p2score')
}

const resetButton = document.querySelector('#reset');
const winningScoreElement = document.querySelector('#gameof');
let gameOver = false;

// function takes in arguments of any player or opponent such as p1 or p2 objects can be passed on as arguments
// from the perspective of the player but the player can be either p1 or p2, whichever you pass as first argument
function scoreKeeper (player, opponent) {
    if(!gameOver){
        player.score += 1;
        // doesn't continue if score 1 has reached upto the winning score
            if (player.score === winningScore) {
                gameOver = true;
                // adds a class of winner and loser that contain different font colors
                player.display.classList.add('winner');
                opponent.display.classList.add('loser');
            }
            // doesn't continue to this line due to the indentation once the gameover is no longer false
            player.display.textContent = player.score;
        }
}

// gets into p1 object to button which selects the button element. Then executes scoreKeeper function with p1 as player
p1.button.addEventListener('click', function() {
    scoreKeeper(p1, p2);
})

// executes scoreKeeper function with p2 as player and p1 as opponent
p2.button.addEventListener('click', function() {
    scoreKeeper(p2, p1);
})

// reset button upon click runs the function reset
resetButton.addEventListener('click', reset)

// created a function named reset 
function reset () {
    score1 = 0;
    score2 = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    gameOver = false;
    // removes the font color classes whichever were applied
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('loser', 'winner');
}

winningScoreElement.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    // calls the reset function if winning score is changed
    reset()
})
