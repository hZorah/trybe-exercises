// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

const n = 5;

for (let line = 1; line <= n; line++) {
  let print = "";
  for (let column = 0; column < line; column++) {
    print += "*";
  }
  console.log(print);
}
