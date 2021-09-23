const readline = require("readline-sync");

function generateRandomNum() {
  return Math.round(Math.random() * 10);
}

const response = readline.questionInt("Digite um número de 0 a 10: ");

function verifyAnswer() {
  const num = generateRandomNum();

  if (response === num) {
    return "Parabéns, número correto!";
  } else {
    return `Opa, não foi dessa vez. O número era ${num}`;
  }
}

console.log(verifyAnswer(response));
