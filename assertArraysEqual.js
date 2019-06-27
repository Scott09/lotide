const assertEqual = function(actual, expected){
  if (actual === expected){
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

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


const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

