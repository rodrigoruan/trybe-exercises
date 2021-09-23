const readline = require("readline-sync");

const peso = readline.questionInt("Digite seu peso: ");
const altura = readline.questionInt("Digite sua altura: ");

console.log(`Seu IMC é de ${peso / altura ** 2}`);
