const assert = require('assert');

const greaterThanTen = (array) => array.filter((i) => i > 10);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const output = greaterThanTen(parameter);

assert.deepStrictEqual(output, result);
