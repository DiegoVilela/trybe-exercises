const assert = require('assert');
const books = require('./books');

function authorBornIn1947() {
  const bookFound = books.find((book) => book.author.birthYear === 1947);
  return bookFound.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
