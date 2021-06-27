const assert = require('assert');
const books = require('./books');

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) nameBook = book.name;
  })

  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
