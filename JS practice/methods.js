// create your own object that consists of functions
// Like .Math is an object that has many functions or methods like square sin etc.

const myMethods = 
{
    // calling myMethods.myName will return a string of Ali Haider Malik
    myName: "Ali Haider Malik",
    // math.random is also a method that generates random number 0 to 1. Math.floor rouunds it off to lower nearest integer
    suggestedUsername: function (name)
    {
        return `${name}${Math.floor(Math.random() * 1000)}`;
    },
    // shorthand for a method that is a function that takes input of an integer and returns and integer.
    // use will be myMethods.monthsCoding(2) will return 2-1=1 
    // to show that i supposedly started coding in January so if it's February right now, i've been coding for 1 month
    monthsCoding(monthNowInt)
    {
        return monthNowInt - 1;
    }
}
// returns alihaidermalik + random integer 0-1000. alihaidermalik908
console.log(myMethods.suggestedUsername("alihaidermalik"));
