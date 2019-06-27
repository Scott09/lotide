
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};


// Function to tell if two arrays are a perfect match
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length){
    return false;
  } else {
    for(let i = array1.length; i--;){
      if(array1[i] !== array2[i]){
        return false;
      }
    }
  }
  return true;
};

// test cases
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
