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
