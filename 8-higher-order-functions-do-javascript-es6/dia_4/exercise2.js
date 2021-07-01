const assert = require('assert');
const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => books.reduce((allNames, book, idx, allBooks) => {
  const author = book.author.name;
  let result;
  (idx === 0) ? result = author : result = `${allNames}, ${author}`;
  if (idx === allBooks.length -1) result = `${result}.`;
  return result;
}, '');

assert.strictEqual(reduceNames(), expectedResult);
