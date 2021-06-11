// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

function getINSSValue(salarioBruto) {
    if (salarioBruto <= 1556.94) {
        return salarioBruto * 0.08;
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        return salarioBruto * 0.09;
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        return salarioBruto * 0.11;
    } else {
        return 570.88;
    }
}

function getIRValue(salarioBase) {
    if (salarioBase <= 1903.98) {
        return 0;
    } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        return (salarioBase * 0.075) - 142.80;
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        return (salarioBase * 0.15) - 354.80;
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        return (salarioBase * 0.225) - 636.13;
    } else {
        return (salarioBase * 0.275) - 869.36;
    }
}

function salarioLiquido(salarioBruto) {
    salarioBase = salarioBruto - getINSSValue(salarioBruto);

    return salarioBase - getIRValue(salarioBase);
}

console.log('Salário Líquido:', salarioLiquido(10000));
