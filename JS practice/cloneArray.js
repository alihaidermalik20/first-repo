// clone an array instead of just changing the pointer.
// Also works with nested multidimensional arrays or arrays inside of arrays
// basically JSON.stringify(array) turns the whole array into a string and JSON.parse turns it back into an array

const arr1 = ['apple', 'banana'];
console.log(JSON.stringify(arr1)); // '["apple", "banana"]' returns the array itself as a string
const arr2 = JSON.parse(JSON.stringify(arr1));

// now that arr2 is a clone of arr1 but isn't pointing to it, changing arr2 will only change arr2 and arr1 will stay the same
arr2.push('pear');
console.log(arr1, arr2);

// can also use this shallow copy method if there are no nested arrays
// However, since arr1 and was declared wit const and not let, 
// while it's value can be changed, the pointer to the address it's pointing to cannot be changed. So below code won't work
// arr1 = [...arr2];
// console.log(arr1);

let arr3 = arr2;
console.assert(arr3 !== arr2, 'arr3 is pointing to the same address as arr2');

// anything you change in arr3 will affect arr2 aswell as they point to the same address in memory. 
// However, if arrays point to different things, they won't evaluate to same as easily
// you'll have to check every primitive separately or use a library to deep check

const arr4 = ['apple', 'banana'];
console.assert(arr4 === arr1, ' arr4 is not same as arr1 because they are pointing to different addresses although contains the same primitives');
