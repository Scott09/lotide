const words = ["ground", "control", "to", "major", "tom"];
const nums = [5, 25];

const map = (array, callback) => {
  const results = [];

  for (let item of array){
    console.log(`Item before: ${item}`);
    console.log(`Item after: ${callback(item)}`)
    console.log(`------`)
    results.push(callback(item));
  }

  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);

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


assertArraysEqual(['g', 'c', 't', 'm', 't'], map(words, word => word[0]));
assertArraysEqual(['d', 'l', 'o', 'r', 'm'], map(words, word => word[word.length - 1]));
assertArraysEqual([25, 125], map(nums, num => num * 5));
