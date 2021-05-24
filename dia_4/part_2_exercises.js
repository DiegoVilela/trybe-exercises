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
    let maxInt = Math.max(...intArray);

    return intArray.indexOf(maxInt);
}
