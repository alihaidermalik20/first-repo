let message1 = "Hello";
let message2 = "Hello World";
let notMessage = "1273.";
let empty = "";
let space = "  ";

let pattern = /^[A-Za-z\s]+$/;
let pattern2 = /[^\s]/;

if (space.search(pattern) === 0 && space.search(pattern2) === 0){
    console.log("congratulations");
}


// regex is asking that from start ^ to the end $, only letters and white spaces \s occur 1 to many times + 
// search will give the index of the first time a letter or white space is found 
// pattern2 makes sure it doesn't start with an empty space or is simply only empty space with no letters