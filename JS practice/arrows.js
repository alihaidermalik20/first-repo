// arrows are used as a shorthand for functions.
// const buy = function() {
//     return 1;
// }

// we can get rid of the word function and return and even brackets if it's only one return statement. 
const buy = () => 1;
console.log(buy);

// if only one argument is passed into the functions, the input/argument(x) doesn't need brackets either
const sell = x => 2;
console.log(sell);

// two arguments should be in brackets and if it's a longer return statement, brackets are better than one line
const negotiate = (a, b) => (
    2 + 2 + 100 * 200 / 20
);

// since there are two statements in the function, return has to be used
const trade = (apples, oranges) => {
    let kiwi = 2;
    return 2 + 2;
};
