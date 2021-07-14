const cipher = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}

const swap = (obj) => {
  let result = {};
  for (let key in obj) {
      result[obj[key]] = key;
  }
  return result;
};

const encode = (str) => str.split('').map((char) => cipher[char] || char).join('');

function decode(str) {
  // `chipher` foi declarada com `var`, portanto
  // é possível acessá-la de dentro da função.
  let reversedCipher = swap(cipher);
  let stringArray = str.split('');

  // Para cada letra da string:
  for (let i = 0; i < stringArray.length; i++) {
      // Se o elemento da esquerda for avaliado como `false`
      // (letra não consta em `cipher`, por exemplo) o elemento
      // da direita do operador `||` é retornado.
      stringArray[i] = reversedCipher[stringArray[i]] || stringArray[i];
  }

  return stringArray.join('');
}

module.exports = {
  encode,
  decode,
  decode,
};
