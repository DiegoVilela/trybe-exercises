const assert = require('assert');
const books = require('./books');

const expectedResult = 43;

const averageAge = () => books.reduce(
    (totalAge, book) => totalAge + (book.releaseYear - book.author.birthYear), 0) / books.length;

assert.strictEqual(averageAge(), expectedResult);
