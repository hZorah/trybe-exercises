// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative”
// se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let i = 10;

let result;

if (i > 0) {
  result = "positive";
} else if (i < 0) {
  result = "negative";
} else {
  result = "zero";
}

console.log(result);
