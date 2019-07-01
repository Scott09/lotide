const assertEqual = require('./assertEqual');

const tail = function (array) {
  return array.slice(1);
};


module.exports = tail;


const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);