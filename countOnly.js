const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};


const countOnly = (allItems, itemsToCount) => {
  const countObject = {};
  for (const item in itemsToCount) {
    if (itemsToCount[item] === true) {
      let itemCount = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          itemCount++;
        }
      }
      if (itemCount === 0){
        countObject[item] = undefined;
      } else {
        countObject[item] = itemCount;
      }
    }
  }
  return countObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Joe",
  "Joe"
];

const testObject = { "Jason": true, "Karima": true, "Fang": false , "Joe": true};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));

console.log(countOnly(firstNames, testObject));

