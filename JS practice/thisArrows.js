
// returns undefined with person.full(). so can't find first and last
// const person = {
//     first: "Ali",
//     last: "Malik",
//     full: () => {
//        return `${this.first} ${this.last}`
//     }
// }

// returns Ali Malik correctly when used without an arrow but function
// const person = {
//     first: "Ali",
//     last: "Malik",
//     full: function() {
//        return `${this.first} ${this.last}`
//     }
// }

// this still results in undefined undefined since setTimeout is a window function
const person = {
    first: "Ali",
    last: "Malik",
    full: function() {
        setTimeout(() => {
        console.log(`${this.first} ${this.last}`)
    }, 3000)
}}
