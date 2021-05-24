/*
1. Crie uma função que receba uma string e retorne 
`true` se for um palíndromo, ou `false`, se não for.
*/
function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    if (!str) return false;

    str = str.toLowerCase();

    return reverse(str) === str;
}

/*
2. Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.
*/
function indexOfMax(intArray) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    let maxInt = Math.max(...intArray);

    return intArray.indexOf(maxInt);
}

/*
3. Crie uma função que receba um `array` de 
inteiros e retorne o índice do menor valor.
*/
function indexOfMin(intArray) {
    let minInt = Math.min(...intArray);

    return intArray.indexOf(minInt);
}

/*
4. Crie uma função que receba um `array` de nomes e 
retorne o nome com a maior quantidade de caracteres.
*/
function longgerName(nameArray) {
    let longestName = nameArray[0]; // Será comparado com todos.

    for (let name of nameArray) {
        // Se o nome mais longo é menor que o nome atual,
        // sobrescreva o nome mais longo com o atual.
        if (longestName.length < name.length) longestName = name;
    }

    return longestName;
}

/*
5. Crie uma função que receba um `array` de inteiros 
e retorne o inteiro que mais se repete.
*/
function mostCommon(intArray) {
    // Objeto criado dinamicamente no formato [int]: quantidade
    let count = {}

    for (let i of intArray) {
        /*
        Caso o int atual ainda não esteja no objeto count, count[i] + 1
        será avaliado como `undefined`, que é considerado `false`. Como
        1 é considerado `true`, a expressão `false || 1` retorna 1, que
        finalmente é atribuído a count[i]. Funciona como um valor padrão
        caso a primeira opção retorne `false`.
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
        */
        count[i] = count[i] + 1 || 1;
    }

    let ints = Object.keys(count);
    let quantities = Object.values(count);
    let key = quantities.indexOf(Math.max(...quantities))

    return ints[key];
}
