// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//     Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas,
//     sem aumentar a quantidade de condicionais.

//     Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//     Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

//     Exemplo: bishop (bispo) -> diagonals (diagonais)

let unitName = "KNIGHT";
let output;

switch (unitName.toLowerCase()) {
  case "bishop":
    output = "diagonals";
    break;
  case "knight":
    output = "L, jumping units";
    break;
  case "king":
    output = "one step in cross";
    break;
  case "tower":
    output = "cross";
    break;
  case "queen":
    output = "cross and diagonals";
    break;
  case "pawn":
    output = "one step foward, eats one step in foward diagonals";
    break;
  default:
    output = "invalid unit";
    break;
}
console.log(output);