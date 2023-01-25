// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

//     Porcentagem >= 90 -> A

//     Porcentagem >= 80 -> B

//     Porcentagem >= 70 -> C

//     Porcentagem >= 60 -> D

//     Porcentagem >= 50 -> E

//     Porcentagem < 50 -> F

//     O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const grade = 90;
let output;

if (grade <= 100 && grade >= 90) {
  output = "A";
} else if (grade < 90 && grade >= 80) {
  output = "B";
} else if (grade < 80 && grade >= 70) {
  output = "C";
} else if (grade < 70 && grade >= 60) {
  output = "D";
} else if (grade < 60 && grade >= 50) {
  output = "E";
} else if (grade < 50 && grade >= 0) {
  output = "F";
} else {
  output = "Invalid grade";
}

console.log(output);
