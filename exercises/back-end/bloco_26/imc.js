const readline = require("readline-sync");

const peso = readline.questionFloat("Digite seu peso: ");
const altura = readline.questionFloat("Digite sua altura: ");

console.log(`Seu IMC é de ${peso / altura ** 2}`);
