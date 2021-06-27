const assert = require('assert');
const books = require('./books');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear < 1980 || book.releaseYear > 1989);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);