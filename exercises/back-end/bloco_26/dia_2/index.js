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
  fs.readFile(`file${script}.txt`, "utf8")
    .then((r) => {
      const word = readline.question("Qual palavra deseja alterar?");
      const newWord = readline.question(
        "Qual palavra deseja inserir no lugar?"
      );
      const rgx = new RegExp(word, "g");
      const newSentence = r.replace(rgx, newWord);
      console.log(newSentence);
      const path = readline.question("Qual caminho de destino?");
      fs.writeFile(path, newSentence);
    })
    .catch((err) => console.log("Arquivo inexistente"));
}

const s = readline.questionInt(`Qual função vc deseja rodar ? 
1 - readContent
2 - writeFile
R: `);

if (s === 1) showContent();
else if (s === 2) writeContet();
else console.log("Função inexistente");
