const assertEqual = function(actual, expected){
  const inspect = require('util').inspect;
  if (actual === expected){
      return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
      return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};


const eqObjects = (object1, object2) => {
  let obj1keys = Object.keys(object1).sort();
  let obj2keys = Object.keys(object2).sort();
  if (obj1keys.length !== obj2keys.length) {
    
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

