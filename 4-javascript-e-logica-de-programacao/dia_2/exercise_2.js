let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(`Sum: ${total}`);

// function sum(total, num) {
//     return total + num;
// }

// console.log(`Sum: ${numbers.reduce(sum)}`);
