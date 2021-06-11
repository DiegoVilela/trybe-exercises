/*
Utilizando `for`, crie um array que vá de 1 até 25 e imprima o resultado.
*/
let array = [];
for (let i = 1; i < 26; i++) {
    array.push(i);
}

console.log(array);

/*
Utilizando o array criado no exercício anterior, imprima
o resultado da divisão de cada um dos elementos por 2.
*/
for (element of array) {
    console.log(element / 2);
}
