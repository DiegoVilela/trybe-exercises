/*
4. Faça uma pirâmide com `n` asteriscos de base.
*/

const base = 33;

let pad = Math.floor(base / 2); // Ponto central da pirâmide

for (let i = 1; i <= base; i += 2) {
    console.log(`${' '.repeat(pad)}${'*'.repeat(i)}`);
    pad--;
}
