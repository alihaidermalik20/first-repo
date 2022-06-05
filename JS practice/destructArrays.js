//  You can place items in an array into new variables

const raceResults = ['Ali', 'Zoe', 'Emma', 'Biggie', 'Tupac', 'Coolio'];

const [gold, silver, bronze, ...everyoneElse] = raceResults;

// gold = 'Ali';
// silver = 'Zoe';
// bronze = 'Emma';
// everyone else = ['Biggie', 'Tupac', 'Coolio'];

console.log(gold);
