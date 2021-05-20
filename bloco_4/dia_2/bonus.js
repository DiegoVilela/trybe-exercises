/*
Para os próximos dois exercícios leia este artigo e
tente entender o que está acontencedo no código abaixo:
*/

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
1. Ordene o array numbers em ordem crescente e imprima seus valores.
*/
console.log('\nAscending Order\n', sort(numbers));

/*
2. Ordene o array numbers em ordem decrescente e imprima seus valores.
*/
console.log('\nDescending order\n', sort(numbers, reverse=true));

/*
3. Agora crie um novo array a partir do array numbers, sem perdê-lo.
Cada valor do novo array deverá ser igual ao valor correspondente
no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro
valor do novo array deverá ser 45, pois é a multiplicação de 5
(primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo
array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3
(valor seguinte), e assim por diante. Caso não haja próximo valor, a
multiplicação deverá ser feita por 2. Faça isso utilizando o for e o
método push . O resultado deve ser o array abaixo:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
*/
let newArray = [];
for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length -1) {
        newArray[i] = numbers[i] * 2;
    } else {
        newArray[i] = numbers[i] * numbers[i + 1];
    }
}
console.log('\nMultiplicated\n', newArray);

/*
Receives an array and returns a copy of it sorted in ascending order by default.
Pass `reverse=true` to get descending order.
*/
function sort(array, reverse=false) {
    let arrayCopy = [...array];

    for (let index = 1; index < arrayCopy.length; index++) {
        for (let secondIndex = 0; secondIndex < index; secondIndex++) {
            if (reverse) {
                if (arrayCopy[index] > arrayCopy[secondIndex]) {
                    swap(arrayCopy, index, secondIndex);
                }
            } else {
                if (arrayCopy[index] < arrayCopy[secondIndex]) {
                    swap(arrayCopy, index, secondIndex);
                }
            }
        }
    }

    return arrayCopy;
}

function swap(array, index, secondIndex) {
    let position = array[index];
    array[index] = array[secondIndex];
    array[secondIndex] = position;
}
