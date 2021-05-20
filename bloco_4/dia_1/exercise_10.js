let custo = 600,
    venda = 1000;

function lucro(custo, venda) {
    if (custo < 0 || venda < 0) {
        return 'Invalid arguments. Please try again.';
    }

    custo = custo * 1.2; // Adiciona 20% de imposto

    return ((venda - custo) * 1000)
}

console.log('Lucro:', lucro(custo, venda));
