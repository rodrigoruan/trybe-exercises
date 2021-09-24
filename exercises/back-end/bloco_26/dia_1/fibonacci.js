const filreader = require("readline-sync");

function fibonacci() {
  const r = filreader.questionInt("Digite um número maior que 0: ");
  const arr = [];

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= r; i += 1) {
    arr[i] = arr[i - 2] + arr[i - 1];
    console.log(arr[i]);
  }
}

fibonacci();
