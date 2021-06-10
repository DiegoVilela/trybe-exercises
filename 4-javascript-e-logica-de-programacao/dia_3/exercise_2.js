/*
Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
*/

const base = 5;

for (let i = 1; i <= base; i++) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    console.log('*'.repeat(i));
}
