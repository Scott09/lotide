const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = array1.length; i--;) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
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


  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  console.log(eqObjects(cd, dc)); // => true

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba)); // => true

  const abc = { a: "1", b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false


  

  const cd2 = { c: "1", d: ["2", 3, 4] };
  console.log(eqObjects(cd, cd2)); // => false

  module.exports = eqObjects;