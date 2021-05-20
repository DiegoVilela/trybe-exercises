let a1 = 60,
    a2 = 60,
    a3 = 60;

function isValidTriangle(a1, a2, a3) {
    if (a1 < 0 || a2 < 0 || a3 < 0) {
        return 'Invalid angle. Please try again.';
    }

    if ((a1 + a2 + a3) != 180) {
        return false;
    }

    return true;
}

console.log('Is it a triangle? ', isValidTriangle(a1, a2, a3));
