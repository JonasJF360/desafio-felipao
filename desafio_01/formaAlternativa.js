// Uma  forma alternativa de fazer o desafio.
function numeroAleatorio(menor, maior) {
    return Math.floor(Math.random() * (maior - menor) + menor);
}

const nomes = [
    'João', 'Joaquim', 'Carlos', 'Nina', 'Maria',
    'Roberta', 'Jorge', 'Antonio', 'Lucas', 'Ana'
];
const nivel = [
    'Ferro', 'Bronze', 'Prata', 'Ouro',
    'Platina', 'Ascendente', 'Imortal', 'Radiante'
];

for (let i = 0; i < 20; i++) {
    const nome = nomes[numeroAleatorio(0, 9)];
    const userXP = numeroAleatorio(1, 12000);

    if (userXP <= 1000)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[0]}".`);
    if (userXP > 1001 && userXP < 2001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[1]}".`);
    if (userXP >= 2001 && userXP < 5001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[2]}".`);
    if (userXP >= 5001 && userXP < 7001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[3]}".`);
    if (userXP >= 7001 && userXP < 8001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[4]}".`);
    if (userXP >= 8001 && userXP < 9001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[5]}".`);
    if (userXP >= 9001 && userXP < 10001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[6]}".`);
    if (userXP >= 10001)
        console.log(`O Herói de nome "${nome}" está no nível de "${nivel[7]}".`);

    console.log(`O XP do herói é de "${userXP}"!\n`);
}
