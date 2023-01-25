// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que 
// serão comparados. 
const n1 = 10;
const n2 = 5;
const n3 = 7;

let result;


if (n1 >= n2 && n1 >= n3) {
    result = n1;
}
else if (n2 >= n1 && n2 >= n3) {
    result = n2;
}
else {
    result = n3;
}

console.log(result);