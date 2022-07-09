// imports cats and dogs from the file relative path
// newer version of require is simply import
// to create a package.json which will store all your dependencies names and versions so you can easily install them with just npm i
// instead of installing every single one, you can use npm init yourself to create a package.json and install packages with names added
// in dependencies automatically and actually installed in node_modules


// because we're using require and not import and type is set to module, file extension used is common js .cjs
const { cats, dogs } = require('./export.cjs');

// you can also install node packages and require them as modules without path

const jokes = require('give-me-a-joke');
const colors = require('colors');

console.log(cats);
console.log(dogs);
// an object that has four functions you can use
console.log(jokes);
console.log(colors);

// documentation shows that to use jokes, you can use a callback function likes this. And to use colors, just use it as . variable
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.random);
})

// if you require an entire folder, whatever is exported from the file with the name of index.js will be imported