// only javascript should remain in jumble

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';

let word = 'javascript';
let jumble2 = '';

for (let i of word) {
    for (let n of jumble) {
        if (i === n){
            jumble2 += jumble.slice(jumble.indexOf(n), jumble.indexOf(n) + 1);
        break;}
}}
console.log(jumble2);
