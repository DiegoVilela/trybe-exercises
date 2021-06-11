let n1 = 7,
    n2 = 3;

function bigger(x, y) {
    if (x > y) {
        return x;
    } else if (y > x) {
        return y;
    } else {
        return 'The numbers are equal.';
    }
}

console.log('Bigger number: ', bigger(n1, n2));
