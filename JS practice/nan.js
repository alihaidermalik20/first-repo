// NaN can't use strict equality but can be checked with isNaN function. 
// Test 2 and 3 below will fail as even NaN === NaN evaluates to false

console.assert(isNaN(undefined), 'Test 1');

console.assert(Number(null) === 0, 'Test 2');

console.assert(Number('four') === NaN, 'Test 3');

let undef = Number(undefined);
console.log(undef == NaN);
