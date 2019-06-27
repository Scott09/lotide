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


const middle = (array) => {
  if (array.length === 1 || array.length === 2){
    return [];
  } else {
    if (array.length % 2 === 0){
      return array.splice(array.length / 2 - 1, (array.length / 2));
    } else { 
      return array.slice(Math.floor(array.length/2), Math.floor(array.length/2) + 1);
    }
  }
};

console.log(middle([1,2,3,4]));
console.log(middle([1,2,3]));

// Test cases using assertArraysEqual

console.log(assertArraysEqual([2, 3], middle([1,2,3,4])));