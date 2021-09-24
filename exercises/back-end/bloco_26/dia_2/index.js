const fs = require("fs").promises;
const readline = require("readline-sync");

const script = readline.questionInt("Qual script você deseja rodar? (1...5)");

function verifyScript() {
  return fs
    .readFile(`file${script}.txt`, "utf8")
    .then((r) => console.log(r))
    .catch((err) => console.log("Arquivo inexistente"));
}

verifyScript();
