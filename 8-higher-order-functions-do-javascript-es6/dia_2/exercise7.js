const assert = require('assert');
const books = require('./books');

const expectedResult = false;

const notUnique = (book) => {
  return books.some((b) => (b.author.birthYear === book.author.birthYear) && (b.id !== book.id))
}

const authorUnique = () => (books.some((book) => notUnique(book))) ? false : true;

assert.strictEqual(authorUnique(), expectedResult);
