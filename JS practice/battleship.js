const myShip = [4,5,6];
let guesses = 0;
let hits = 0;
let isSunk = false;

while(isSunk === false)
{
    // ask for an input which will always be a string
    let input = prompt("Take a guess between 0-6");
    let guess = parseInt(input);
    // input should be a valid number
    if (guess < 0 || guess > 6)
    {
        alert("Enter a valid number from 0-6");
        continue;
    }
    else{
        guesses++;
    }
    // takes an item from the array myShip one at a time and stores it in the var position
    for (const position of myShip) {
        // if the guess is equal to first item in myShip array or equal to second or to third. double equality to change prompt string to integer
        if (guess === position){
        alert("correct guess!");
        hits++;

        // breaks out of the loop once it finds what it was looking for and continues with the code
        break;
        }
    }
    // exit the loop once the hits reach 3
    if (hits === 3)
    {
        isSunk = true;
        alert("You sank my battleship");
    }
}

alert(`You sank my battleship in ${guesses} guesses`);
