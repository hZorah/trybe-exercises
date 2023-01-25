//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem:
//“nenhum valor ímpar encontrado”;

// let impares = 0;

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 != 0) {
//     impares++;
//   }
// }
// if (impares === 0) {
//   console.log("nenhum valor ímpar encontrado");
// } else {
//   console.log(impares);
// }

// let array =[];

// for (let index = 1; index <= 25; index++) {
//     array.push(index);
// }

// for (const i of array) {
//     console.log(i/2);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// for (const iterator of numbers) {
//   console.log(iterator);
// }

let novoArray = [];

for (let index = 1; index <= numbers.length; index += 1) {
  if (index == numbers.length) {
    novoArray.push(numbers[index - 1] * 2);
  } else {
    novoArray.push(numbers[index] * numbers[index - 1]);
  }
}

for (const iterator of novoArray) {
  console.log(iterator);
}
