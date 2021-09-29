const fs = require("fs");

function saveFile(name, content) {
  if (!name || !content) return "Erro";

  fs.writeFile(name, content, (err) => {
    if (err) console.log("Erro");
  });
  return "ok";
}

console.log(saveFile("oi", "sadsa"));

module.exports = saveFile;
