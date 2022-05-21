let message1 = "Hello";
let message2 = "Hello World";
let notMessage = "1273.";
let empty = "";
let space = " ";

let result = space.search(/^[A-Za-z\s]+$/);
console.log(result);

// regex is asking that from start ^ to the end $, only letters and white spaces \s occur 1 to many times + 
// search will give the index of the first time a letter or white space is found 
// it still allows string with only a space and no letters
