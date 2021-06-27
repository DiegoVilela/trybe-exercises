const assert = require('assert');
const books = require('./books');

const expectedResult = false;

const notUnique = (book) => {
  return books.some((b) => (b.author.birthYear === book.author.birthYear) && (b.id !== book.id))
}

function authorUnique() {
  for (const currentBook of books) if (notUnique(currentBook)) return false;

  return true;
}

assert.strictEqual(authorUnique(), expectedResult);
