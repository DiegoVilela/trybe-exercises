const assert = require('assert');
const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => books.find(
  (book) => /^(\w\.\s){3}/.test(book.author.name)).name;

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);