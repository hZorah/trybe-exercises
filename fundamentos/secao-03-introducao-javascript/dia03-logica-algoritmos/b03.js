// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

const n = 5;

for (let line = 1; line <= n; line++) {
  let print = "";
  for (let column = 0; column < line; column++) {
    print += "*";
  }
  let padded = print.padStart(n, " ");
  console.log(padded);
}
