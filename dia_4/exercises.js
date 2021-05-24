let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/*
1. Imprima no console uma mensagem de boas-vindas 
para a personagem acima, incluindo seu nome.
*/
console.log(`${'='.repeat(34)} Exercise 1 ${'='.repeat(34)}`);
console.log(`Bem-vinda, ${info.personagem}.`);

/*
2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' 
e o valor 'Sim' e, em seguida, imprima o objeto no console.
*/
console.log(`\n${'='.repeat(34)} Exercise 2 ${'='.repeat(34)}`);
info.recorrente = 'Sim';
console.log(info);

/*
3. Faça um `for/in` que mostre todas as chaves do objeto.
*/
console.log(`\n${'='.repeat(34)} Exercise 3 ${'='.repeat(34)}`);
for (let chave in info) {
    console.log(chave);
}

/*
4. Faça um novo `for/in`, mas agora mostre todos os valores das chaves do objeto.
*/
console.log(`\n${'='.repeat(34)} Exercise 4 ${'='.repeat(34)}`);
for (let chave in info) {
    console.log(info[chave]);
}

/*
5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do 
primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, 
Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima 
os valores de cada objeto juntos de acordo com cada uma das chaves.
console.log(`\n${'='.repeat(34)} Exercise 5 ${'='.repeat(34)}`);
*/
console.log(`\n${'='.repeat(34)} Exercise 5 ${'='.repeat(34)}`);
let tioPatinhas = {
    personagem: 'Tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

function bothRecorrent(obj1, obj2) {
    if (obj1.recorrente === 'Sim' && obj2.recorrente) {
        return true;
    }
    return false;
}

for (let chave in info) {
    if (chave !== 'recorrente') {
        console.log(`${info[chave]} e ${tioPatinhas[chave]}`);
    } else {
        if (bothRecorrent(info, tioPatinhas)) {
            console.log('Ambos recorrentes');
        }
    }
}