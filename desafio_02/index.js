// // Desafio 02 do Felipão.

// ## Instruções para entrega:

// ### Calculadora de partidas Rankeadas

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ### Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 11 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ### Saída

// Ao final deve se exibir uma mensagem:`"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"`

function intGenerator(menor, maior) {
    return Math.floor(Math.random() * (maior - menor) + menor);
}


function calcularRankeada(vitorias, derrotas) {
    return vitorias - derrotas;
}

function main() {
    const nivel = [
        'Ferro', 'Bronze', 'Prata', 'Ouro',
        'Diamante', 'Lendário', 'Imortal'
    ];
    for (let i = 0; i < 20; i++) {
        const vitorias = intGenerator(2, 120);
        const derrotas = intGenerator(1, vitorias);
        const saldoVitorias = calcularRankeada(vitorias, derrotas);

        if (saldoVitorias < 11)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[0]}.`);
        if (saldoVitorias >= 11 && saldoVitorias < 20)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[1]}.`);
        if (saldoVitorias >= 21 && saldoVitorias < 50)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[5]}.`);
        if (saldoVitorias >= 51 && saldoVitorias < 80)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[3]}.`);
        if (saldoVitorias >= 81 && saldoVitorias < 90)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[4]}.`);
        if (saldoVitorias >= 91 && saldoVitorias < 100)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[6]}.`);
        if (saldoVitorias >= 101)
            console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel[7]}.`);
    }
}

main();