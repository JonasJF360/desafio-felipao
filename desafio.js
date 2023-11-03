// // Desafio do Felipão.
// # Desafio Classificador de nível de Herói.

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.001 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve-se exibir uma mensagem:
// `"O Herói de nome **{nome}** está no nível de **{nivel}**"``

const nome = 'Jonas';
let userXP = 1000;
const nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];

let index = 0;
while (true) {
    if (userXP <= 1000) {
        break;
    } else if (userXP > 1001 && userXP < 2001) {
        index += 1;
        userXP = 1000;
    } else if (userXP >= 2001 && userXP < 5001) {
        index += 1;
        userXP = 2000;
    } else if (userXP >= 5001 && userXP < 7001) {
        index += 1;
        userXP = 5000;
    } else if (userXP >= 7001 && userXP < 8001) {
        index += 1;
        userXP = 7000;
    } else if (userXP >= 8001 && userXP < 9001) {
        index += 1;
        userXP = 8000;
    } else if (userXP >= 9001 && userXP < 10001) {
        index += 1;
        userXP = 9000;
    } else if (userXP >= 10001) {
        index += 1;
        userXP = 10000;
    }
}

console.log(`O Herói de nome "${nome}" está no nível de "${nivel[index]}".`);