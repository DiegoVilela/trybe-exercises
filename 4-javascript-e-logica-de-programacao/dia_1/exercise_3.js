let n1 = 7,
    n2 = 3,
    n3 = 11;

function bigger(x, y, z) {
    let bigger = x;

    if (y > bigger) {
        bigger = y;
    }

    if (z > bigger) {
        bigger = z;
    }

    if (x === y && y === z) {
        return 'The numbers are equal.';
    } else {
        return bigger;
    }
}

console.log('Bigger number: ', bigger(n1, n2, n3));
