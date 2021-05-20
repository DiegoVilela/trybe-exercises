let number = 7;

function signal(n) {
    if (n > 0) {
        return 'positive';
    } else if (n < 0) {
        return 'negative';
    }

    return 0;
}

console.log('Signal of the number: ', signal(number));
