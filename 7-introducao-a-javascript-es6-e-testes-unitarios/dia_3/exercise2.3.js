const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let counter = 0;
  const newCharacters = characters.map((char) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      counter += 1;
      return counter;
    }
    return char;
  });
  return newCharacters.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);

assert.strictEqual(output, result);
