const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce(
  (total, curName) => total + curName.match(/a/gi).length, 0);

assert.deepStrictEqual(containsA(), 20);
