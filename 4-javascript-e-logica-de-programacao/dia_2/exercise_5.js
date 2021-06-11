let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let biggest = numbers[0]; /* Primeiro número no array */
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

console.log(`The biggest number: ${biggest}`);

/* Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max */
// console.log(Math.max(... numbers));
