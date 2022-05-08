// you can pass two names and then as many other arguments as you want and all of them all collected in ...rest

function winners(firstPlace, secondPlace, ...rest) {
    console.log(`Gold goes to ${firstPlace}`);
    console.log(`Silver goes to ${secondPlace}`);
    console.log(`And a big thanks to ${rest}`);
};
