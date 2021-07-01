const assert = require('assert');
const books = require('./books');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = () => books.filter(
  (book) => ['Fantasia', 'Ficção Científica'].includes(book.genre)).map(
    (book) => book.author.name).sort();

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);