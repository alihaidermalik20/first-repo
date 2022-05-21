// #todo

'use strict';


//   a user can provide input that starts with a capital letter and ends with a period
//     - given the user cancels, they will be prompted again
//     - given the input is shorter than two characters, they will be prompted again
//     - given their input does not begin with a capital letter, they will be prompted again
//     - given their input does not end with a period, they will be prompted again
//     - given their input is valid, the first letter will be lower-cased and the period removed
//     - given their input is valid, the loop will exit

//   test cases:
//     invalid input:
//       (no test cases! the loop will not exit so there will be no output to test)
//     two-character input:
//       'A.' -> 'a'
//       'X.' -> 'x'
//     longer words:
//       'Hello.' -> 'hello'
//       'JavaScript!.' -> 'javaScript!'
//     with some spaces:
//       'Hello World.' -> 'hello World'
//       'Hack your future.' -> 'hack your future'



console.log('--- begin program ---');

// initializing variables to be used later so that they're local and not global and available under scope in debugging
let input = null;
let checking, output;

while (input===null) {
// first putting the prompt input to checking to check if it meets all the conditions
checking = prompt('Please enter a text starting with a Capital letter and ending with period');
if (checking === "" || checking === null) {
    continue;
}
else if (checking[0] !== checking[0].toUpperCase()) {
alert('Please type again, your input did not start with capital letter');
// if you enter this if because first letter is not capital, continue will take you back to while(input===null) line
continue;
} else if (!checking.endsWith('.')) {
alert('Please type again, your input didn\t end with a dot');
continue;
}
else if (checking.length < 2) {
alert('Please type again, you input was less than 2 characters long');
continue;
}
// now that prompt passed all the conditions, you can transfer it to input so the while loop ends
input = checking;
}

// takes input and transforms it to all lowercase first and then cuts off from 0 to last not including 0 but including last character
output = input.toLowerCase().slice(0, -1);
console.log('output:', output);
alert(output);

console.log('--- end program ---');
