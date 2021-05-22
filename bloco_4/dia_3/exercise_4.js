/*
4. Faça uma pirâmide com `n` asteriscos de base.
*/

const base = 5;

let count = base - 2;
for (let i = 1; i <= base; i += 2) {
    console.log(`${' '.repeat(count - 1)}${'*'.repeat(i)}`);
    count--;
}
