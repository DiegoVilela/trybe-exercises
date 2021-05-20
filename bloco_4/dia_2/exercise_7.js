/*
Utilizando `for`, descubra qual o menor valor contido no array e imprima-o.
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(`The smallest number: ${smallest}`);
