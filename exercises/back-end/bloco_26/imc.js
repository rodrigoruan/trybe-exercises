const readline = require("readline-sync");

const peso = readline.questionFloat("Digite seu peso: ");
const altura = readline.questionFloat("Digite sua altura: ");

const IMCTable = (IMC) => {
  if(IMC < 18.5) return "Abaixo do peso"
  else if(IMC < 24.9) return "Peso normal"
  else if(IMC < 29.9) return "Acima do peso"
  else if(IMC < 35.9) return "Obesidade grau 1"
  else if(IMC < 39.9) return "Obesidade grau 2"
  else return "Obesidade grau 3"
};

const IMC = peso / altura ** 2;

console.log(`Seu IMC é de ${IMC}`);
console.log(IMCTable(IMC));
