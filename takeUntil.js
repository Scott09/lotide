const takeUntil = (array, callback) => {
  const results = [];
  for (const element of array) {
    if (callback(element) !== true){
      results.push(element);
    } else {
      break;
    }
  }
  return results;
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual([1, 2, 5, 7, 2,], takeUntil(data1, x => x < 0));
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], takeUntil(data2, x => x === ','));


module.exports = takeUntil;
