const readline = require("readline-sync");

console.log(`Scripts disponíveis:
1 - Velocidade
2 - Sorteio
3 - IMC
4 - Fatorial`);

const response = readline.questionInt(
  "Qual script você deseja rodar? (1/2/3/4) "
);

if (response === 1) require("./velocidade")();
else if (response === 2) require("./sorteio")();
else if (response === 3) require("./imc")();
else if (response === 4) require('./fatorial')
