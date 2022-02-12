// VS code automatically fills the format for the settimeout function
// it allows you to delay running your code
// setTimeout(() => {
    
// }, timeout);

// to print out Hello immediately and goodbye after 3000ms
console.log("Hello");
setTimeout(() => {
    console.log("Goodbye");
}, 3000)

// a random integer 0 to 10 is going to be printed every 2 seconds. to stop it, clearInterval(id) can be used
const id = setInterval(() => {
    console.log(Math.floor(Math.random() * 10));
}, 2000);
