let n1 = 2,
    n2 = 7,
    n3 = 3;

function containEven(x, y, z) {
    /* `arguments` = objeto contendo todos os argumentos passados para a função */
    /* Para cada item do object `arguments` */
    for (let i of arguments) {
        /* (n % 2) retorna 0 (que equivale a `false`) se `n` for par. */
        if ( ! (i % 2)) {
            return true; // encerra o looping
        }
    }
    return false; // caso nenhum número ímpar seja encontrado
}

console.log('Does it contain an even number?', containEven(n1, n2, n3));
