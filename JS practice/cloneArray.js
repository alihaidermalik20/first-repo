// clone an array instead of just changing the pointer.
// Also works with sted multidimensional arrays or arrays inside of arrays
// basically JSON.stringify(array) turns the whole array into a string and JSON.parse turns it back into an array

const arr1 = ['apple', 'banana'];
const arr2 = JSON.parse(JSON.stringify(arr1));

// now that arr2 is a clone of arr1 but isn't pointing to it, changing arr2 will only change arr2 and arr1 will stay the same
arr2.push('pear');
console.log(arr1, arr2);
