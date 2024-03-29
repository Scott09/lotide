// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// console.log(middle([1,2,3,4]));
// console.log(middle([1,2,3]));

// Test cases using assertArraysEqual

// console.log(assertArraysEqual([2, 3], middle([1,2,3,4])));

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});