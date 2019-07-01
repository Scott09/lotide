const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};



const countLetters = (str) => {
  const letterCount = {};
  let myString = str.toLowerCase();

  for (var char of myString){
    letterCount[char] = 0;
  }
  for (var char of myString){
    letterCount[char] = ++letterCount[char];
  }
  delete letterCount[' '];
  return letterCount;
};

console.log(countLetters('rrrrsssieijeiefjoe'));

module.exports = countLetters;


