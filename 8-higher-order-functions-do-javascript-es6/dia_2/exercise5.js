const assert = require('assert');
const books = require('./books');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);