/*
Faça uma pirâmide com `n` asteriscos de base que seja vazia no meio.
Assuma que o valor de `n` será sempre ímpar.
*/

const base = 13;
let pad = Math.floor(base / 2); // Ponto central da pirâmide
let numSpaces,
    line;

for (let i = 1; i <= base; i += 2) {
    numSpaces = i - 2;

    // Primeira linha
    if (i === 1) {
        line = `${' '.repeat(pad)}*`;
    }

    // Última linha
    else if (i === base) {
        line = '*'.repeat(base);  
    }

    // Linhas com espaços
    else {
        line = `${' '.repeat(pad)}*${' '.repeat(numSpaces)}*`;
    }
    console.log(line);
    pad--;
}
