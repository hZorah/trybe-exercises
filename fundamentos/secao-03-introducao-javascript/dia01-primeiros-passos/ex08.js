// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, ele deve retornar false.

//     Bonus: use somente um if.
const n1 = 2;
const n2 = 5;
const n3 = 10;

let output = false;

if (n1%2!=0 || n2%2!=0 || n3%2!=0){
    output = true;
}

console.log(output);