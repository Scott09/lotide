const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};


const letterPositions = (str) => {
  const letterPositions = {};
  let myArray = str.toLowerCase().split("");

  for (const char of myArray) {
    letterPositions[char] = [];
  }

  for (const [index, value] of myArray.entries()) {
    letterPositions[value].push(index);
  }
  delete letterPositions[' '];
  return letterPositions;
};


console.log(letterPositions("hello world"));