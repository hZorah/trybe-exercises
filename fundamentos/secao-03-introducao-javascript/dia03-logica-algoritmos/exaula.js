// 1 -
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma =0;

for (let index = 1; index <= 50; index++) {
    soma += index;
}

console.log("A soma total de 1 a 50 é:", soma);

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contDivisiveis = 0;
for (let index = 2; index <= 150; index++) {
  if (index % 3 == 0) {
    contDivisiveis++;
  }
}

if (contDivisiveis == 50) {
  console.log("Mensagem secreta do mal");
} else {
  console.log(contDivisiveis);
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let opcoes = ["pedra", "papel", "tesoura"];
let perde = ["tesoura", "pedra", "papel"];

let jogador1 = "pedra";
let jogador2 = "papel";

//Verificando se a virtória é do jogador 1
let indexOfJogador1 = opcoes.indexOf(jogador1);
let indexOfJogador2 = perde.indexOf(jogador2);

if (jogador1 == jogador2) {
  console.log("A Ties");
} else if (indexOfJogador1 == indexOfJogador2) {
    console.log("PLayer 1 won");
} else {
    console.log("PLayer 2 won");
}
//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
let idade = 17;
let msg = idade < 18 ? "A pessoa é menor de idade" : "A pessoa é maior de idade";
console.log(msg);

// 5

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
const pessoas = ["Carolzita", "Flavio", "Noel"];
const idades = [36, 35, 37];
let menorIdade = idades[0];
let pessoaMaisNova = pessoas[0];
for (let index = 1; index < pessoas.length; index++) {
    if (idades[index] < menorIdade){
        pessoaMaisNova = pessoas[index];
    }
}
console.log(pessoaMaisNova, "é a mais nova.");