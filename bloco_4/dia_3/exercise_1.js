/*
1. Faça um programa que, dado um valor `n` qualquer, seja `n` > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho `n`.
*/

const n = 7;

if (n > 1) {
    for (let i = 0; i < n; i++) {
        console.log('*'.repeat(n));
    }
} else {
    console.log('"n" needs to be greater than 1.');
}
