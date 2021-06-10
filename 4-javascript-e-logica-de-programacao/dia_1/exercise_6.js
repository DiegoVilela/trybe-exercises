// var readline = require('readline');
// var resp = "";

// var leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// leitor.question("Qual módulo pra ler dados no node.js?\n", function(answer) {
//     var resp = answer;
//     console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
//     leitor.close();
// });

function movimentos(peca) {
    const pecas = {
        'rei': 'uma casa na horizontal, vertical e diagonal',
        'dama': 'linhas retas pelas fileiras, colunas e diagonais',
        'bispo': 'diagonal',
        'cavalo': 'em "L"',
        'torre': 'linhas retas nas colunas e fileiras',
        'peão': 'verticalmente na coluna que encontra-se'
    }

    peca = peca.trim().toLowerCase();
    let result = pecas[peca];

    if (result === undefined) {
        result = 'Peça inválida. Tente novamente, por favor.';
    }

    return result;
}

console.log('Movimentos:', movimentos('  CAVALO '));
