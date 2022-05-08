// use try and catch to continue running the code een if an error occurs
// it tries to print message in upper case three times but upper case can only be used with string so if you pass a number
// it catches it and prints please pass a string instead of error and continues

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log("Please pass a string next time");
    }
    console.log('Function continues');
};
