const readline = require("readline-sync");

function game() {
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

  const playAgain = readline.question("Deseja jogar novamente? (y/n)");

  if (playAgain === "y") game();
  else console.log("Até mais!");
}

game();
