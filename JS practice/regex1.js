// to remove all special characters, spaces and underscores

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';
let regex = /[\w]/;
let jumbleTransformed = '';

for (let i of jumble) {
    if(i.match(regex) && !i.match('_')) {
        jumbleTransformed += i;
    }
}
console.log(jumbleTransformed);