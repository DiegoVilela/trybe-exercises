/*
Utilizando o array abaixo, percorra-o somando todos os valores. 
Caso o valor final seja maior que 15, imprima-o. Caso seja igual 
ou menor que 15, imprima a mensagem: "valor menor que 16":
*/

let fruits = [3, 4, 10, 1, 12, 855];

function sum(total, current) {
    return total + current;
}

let total = fruits.reduce(sum);

// Conditional (ternary) operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
(total > 15) ? console.log(total) : console.log('Valor menor que 16.');
