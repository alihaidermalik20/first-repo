console.assert(isNaN(undefined), 'Test 1');
console.log(Number(undefined) === NaN, 'Test 1');

console.assert(Number(null) === 0, 'Test 2');

console.assert(Number('four') === NaN, 'Test 3');

let undef = Number(undefined);
console.log(undef == NaN);