const readline = require("readline-sync");

function velocidade() {
  const distancia = readline.questionInt("Digite a distância: ");
  const tempo = readline.questionInt("Digite o tempo: ");

  console.log(`A velocidade é de ${distancia / tempo}`);
}

module.exports = velocidade;
