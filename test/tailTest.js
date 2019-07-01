const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checkxing it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(words.length, 3);
  });
  it("returns '[2,3,4]' for [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]); 
  });
});