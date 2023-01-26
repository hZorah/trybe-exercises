// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
// ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o
// maior número primo entre 2 e 50.

let maior = 0;

for (let number = 2; number <= 50; number++) {
  let divisores = 0;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      divisores++;
    }
  }

  if (divisores == 0) {
    if (number > maior) {
      maior = number;
    }
  }
}
console.log(maior);
