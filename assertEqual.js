const assertEqual = function(actual, expected){
    if (actual === expected){
        return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    } else {
        return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
};

// TEST CASES

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, "lighthouse"));
console.log(assertEqual(true, 1));
console.log(assertEqual(true, "hello"));
