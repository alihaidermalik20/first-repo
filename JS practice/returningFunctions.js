// a variable that stores function and you can pass an input to this variable that runs in the function

// function that takes input of x and y and returns a function itself that takes input of x and y and return true or false
function betweenFunc(x, y)
{
    return function (num)
    {
        return num >= x && num <= y;
    }
}
// the function when given an input of 0 and 18 is stored in a variable called isChild
// You can further pass an input to the variable isChild as it's result is a function which asks for an input num and returns True or False
const isChild = betweenFunc(0, 18);

// result of isChild is this function
    // function (num)
    // {
    //     return num >= x && num <= y;
    // }

// so if you pass 10 as input to isChild, num will be 10 and it will return true or false, in this case true
console.log(isChild(10));
