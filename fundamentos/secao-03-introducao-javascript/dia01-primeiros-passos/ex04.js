// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido,
// você deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.
const teta1 = 90;
const teta2 = 45;
const teta3 = 45;
let result;

if (teta1 < 0 || teta2 < 0 || teta3 < 0) {
  result = "Error: invalid angles";
} else if (teta1 + teta2 + teta3 == 180) {
  result = true;
} else {
  result = false;
}
console.log(result);
