const readline = require("readline-sync");

function fatorial() {
  const num = readline.questionInt("Digite um número maior que 0: ");

  function fatorial(n) {
    if (n <= 0) return "Número inválido";

    return Array.from(Array(n), (_, i) => i + 1).reduce(
      (acc, curr) => acc * curr
    );
  }

  console.log(fatorial(num));
}

fatorial();

module.exports = fatorial;
