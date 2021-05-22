/*
3. Agora inverta o lado do triângulo.
*/

const base = 5;

for (let i = 1; i <= base; i++) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    console.log('*'.repeat(i).padStart(base, ' '));
}
