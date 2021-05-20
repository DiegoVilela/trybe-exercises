let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Função a ser utilizada pelo método `reduce` do array. */
function sum(total, num) {
    /* valor anterior acumulado + valor atual */
    return total + num;
}

function average(array) {
    return numbers.reduce(sum) / array.length;
}

let msg = 'Valor maior que 20.';
if (average(numbers) < 20) {
    msg = 'Valor menor que 20.';
}

console.log(msg);
