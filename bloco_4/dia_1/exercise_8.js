let n1 = 7,
    n2 = 10,
    n3 = 20;

function containOdd(x, y, z) {
    /* `arguments` = objeto contendo todos os argumentos passados para a função */
    /* Para cada item do object `arguments` */
    for (let i of arguments) {
        /* (n % 2) retorna 1 (que equivale a `true`) se `n` for ímpar. */
        if (i % 2) {
            return true; // encerra o looping
        }
    }
    return false; // caso nenhum número ímpar seja encontrado
}

console.log('Does it contain an odd number?', containOdd(n1, n2, n3));
