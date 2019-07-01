# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @scottappleton/lotide`

**Require it:**

`const _ = require('@scottappleton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual `: check to see if two arrays are equal
* `assertEqual  `: check the equality of two given values
* `assertObjectsEqual  `: check to see if two ob
* `countLetters `: countLetters in a string 
* `countOnly  `: Given an array of items. Only count occurences of given items.
* `eqArrays  `: check the equality of two given arrays
* `eqObjects `: check to see if two objects are equal
* `findKey `: return key
* `findKeyByValue  `: return key of given value in object
* `flatten  `: returns a flattened array
* `head `: returns the head of an array
* `index.js `: export all functions in an object
* `letterPositions `: returns the indexes of all letters in a string
* `map `: copies the map lodash operation
* `middle`: returns the middle of an array in an array
* `tail `: returns the tail of an array
* `takeUntil `: iterate through an array until a given callbackfuntion returns false
* `without `: return an array without given values
