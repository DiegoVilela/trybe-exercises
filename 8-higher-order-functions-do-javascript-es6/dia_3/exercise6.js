const assert = require('assert');
const books = require('./books');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const yearsOld = 60;
  const currentYear = new Date().getFullYear();
  return books.filter(
    (book) => book.releaseYear <= (currentYear - yearsOld)).map(
      (book) => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);
