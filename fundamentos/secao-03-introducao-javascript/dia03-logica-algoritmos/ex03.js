// Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

//     Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor.
//     Considere o número de caracteres de cada palavra.

const array = ["java", "javascript", "python", "html", "css"];

let maior = "";
let menor = array[0];

for (let i = 0; i < array.length; i++){
    if (array[i].length > maior.length){
        maior = array[i];
    }
}

console.log("Maior:", maior);

for (let i = 1; i < array.length; i++){
    if (array[i].length < menor.length){
        menor = array[i];
    }
}

console.log("Menor:", menor);
