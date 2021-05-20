let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sum(total, num) {
    return total + num;
}

function average(array) {
    return numbers.reduce(sum) / array.length;
}

console.log(`Average: ${average(numbers)}`);
