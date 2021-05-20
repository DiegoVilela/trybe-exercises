/*
Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odds = 0;
for (number of numbers) { // Não confundir com for/in
    if (number % 2) {
        odds++;
    }
}

let msg = `There are ${odds} odd numbers.`;
if ( ! odds) {
    msg = 'No odd number was found.';
}

console.log(msg);
