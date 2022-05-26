// only javascript should remain in jumble

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';

let word = 'javascript';

for (let i = 0; i < jumble.length; i++) {
    let counter = 0;
    let index = jumble[i];

    // checks the current index of jumble against every letter in 'javascript' and makes the counter = 10 
    // if none of the letters match the current index of jumble

    for (let n of word) {
        if (index !== n){
            counter += 1;
            }
}

// if counter is equal to 10 or none of the 10 letters matched the current index, delete that one index and 
// go back one step since the next array/letter in jumble just went one index behind as there's one index less in jumble

if (counter === word.length) {
    jumble = jumble.replace(index, '');
    i -= 1;
} 
}
console.log(jumble);
