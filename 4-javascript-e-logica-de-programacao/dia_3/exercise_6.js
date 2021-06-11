/*
6. Faça um programa que diz se um número definido numa variável é primo ou não.
    - Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
*/

const n = 10000;

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        // O looping não precisa ir até o final, já que 2 < `i` < `n`
        if (n % i === 0) return false;
    }

    return true; // Neste ponto, nenhum divisor foi encontrado.
}

console.log((isPrime(n) ? `${n} is prime.` : `${n} is NOT prime.`));
