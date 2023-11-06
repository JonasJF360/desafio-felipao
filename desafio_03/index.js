// // Desafio 03 do Felipão.

// ## Instruções para entrega:

// ### Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - [x] Variáveis
// - [x] Operadores
// - [x] Laços de repetição
// - [x] Estruturas de decisões
// - [x] Funções
// - [x] Classes e Objetos

// ### Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ### Saída

// Ao final deve se exibir uma mensagem:

// - `"o {tipo} atacou usando {ataque}"`

//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        if (this.type === 'mago') {
            console.log(`O ${this.type} atacou usando magia.`);
        } else if (this.type === 'guerreiro') {
            console.log(`O ${this.type} atacou usando espada.`);
        } else if (this.type === 'monge') {
            console.log(`O ${this.type} atacou usando artes marciais.`);
        } else if (this.type === 'ninja') {
            console.log(`O ${this.type} atacou usando shuriken.`);
        }
    }
}

function intGenerator(menor, maior) {
    return Math.floor(Math.random() * (maior - menor) + menor);
}

const dadaTest = {
    names: [
        'Marcos', 'Pedro', 'Joaquim', 'Antonio', 'João', 'José', 'Maria', 'Ana', 'Lucas', 'Carla', 'Denise', 'Larissa', 'Sandra', 'Viviane', 'Luciana', 'Vagner', 'Bruno',
        'Cristiano', 'Fernando', 'Gustavo', 'Jorge', 'Kleber', 'Luan', 'Matheus', 'Natalia', 'Rafael', 'Rodrigo', 'Samuel', 'Thiago', 'Vitor', 'Afonso'
    ],
    types: ['mago', 'guerreiro', 'monge', 'ninja']
}
function main() {
    const testRepeat = intGenerator(10, 40);

    for (let i = 0; i < testRepeat; i++) {
        const hero = new Hero(
            dadaTest.names[intGenerator(0, dadaTest.names.length)],
            intGenerator(15, 75),
            dadaTest.types[intGenerator(0, dadaTest.types.length)]
        );
        console.log('\nNome:', hero.name, '| Idade:', hero.age, '| Tipo:', hero.type);
        hero.attack();
    }
}

main()