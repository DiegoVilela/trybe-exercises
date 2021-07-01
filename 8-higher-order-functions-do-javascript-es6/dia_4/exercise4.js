const assert = require('assert');
const books = require('./books');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => books.reduce(
  (bookResult, cur) => (cur.name.length > bookResult.name.length) ? cur : bookResult);

assert.deepStrictEqual(longestNamedBook(), expectedResult);
