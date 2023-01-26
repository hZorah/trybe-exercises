// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
// Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

const n = 5;

if (n > 1) {
  for (let line = 0; line < n; line++) {
    let print = "";
    for (let column = 0; column < n; column++) {
      print += "*";
    }
    console.log(print);
  }
}
