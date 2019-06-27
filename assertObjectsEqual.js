const eqObjects = (object1, object2) => {
  let obj1keys = Object.keys(object1).sort();
  let obj2keys = Object.keys(object2).sort();
  if (obj1keys.length !== obj2keys.length){
    return false;
  }
  for (let i = 0; i < obj1keys.length; i++) {
    if (Array.isArray(object1[obj1keys[i]]) && Array.isArray(object1[obj2keys[i]])) {
      if (!eqArrays(object1[obj1keys[i]], object1[obj2keys[i]])) {
        return false;
      } else {
        if (object1[obj1keys[i]] !== object1[obj2keys[i]]){
          return false;
        }
      }
    }
  }
      
  return true;
};

const assertObjectsEqual = (actual, expected) {
  if (eqObjects(array1, array2)){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};