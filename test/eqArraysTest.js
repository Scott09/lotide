const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));