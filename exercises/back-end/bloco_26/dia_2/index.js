const fs = require("fs").promises;
const readline = require("readline-sync");

function showContent() {
  const script = readline.questionInt("Qual script você deseja rodar? (1...5)");

  function verifyScript() {
    return fs
      .readFile(`file${script}.txt`, "utf8")
      .then((r) => console.log(r))
      .catch((err) => console.log("Arquivo inexistente"));
  }

  verifyScript();
}

function writeContet() {
  const script = readline.questionInt(
    "Qual arquivo você deseja alterar? (1...5)"
  );
}

const s = readline.questionInt(`Qual função vc deseja rodar ? 
1 - readContent
2 - writeFile`);

if (s === 1) showContent()
else if (s === 2) writeContet()
else console.log("Função inexistente")
