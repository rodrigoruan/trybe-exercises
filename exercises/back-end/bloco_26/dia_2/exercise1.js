const fs = require("fs").promises;

// 1

// function func(a, b, c) {
//   return new Promise((resolve, reject) => {
//     if ([a, b, c].some((num) => typeof num !== "number")) {
//       reject(Error("Informe apenas números"));
//     }

//     const total = (a + b) * c;

//     if (total < 50) reject(Error("Valor muito baixo"));
//     resolve(total);
//   });
// }

// 2

// function randomNum() {
//   return Math.floor(Math.random() * 100 + 1);
// }

// func(randomNum(), randomNum(), randomNum())
//   .then((r) => console.log(r))
//   .catch((err) => console.log(err.message));

// 3
// async function resolvePromise() {
//   try {
//     const r = await func(randomNum(), randomNum(), randomNum());
//     console.log(r);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// resolvePromise();

//4
function showAllCharacters() {
  return fs
    .readFile("simpsons.json", "utf8")
    .then((response) => {
      const parsedArray = JSON.parse(response);
      parsedArray.forEach(({ id, name }) => console.log(`${id} - ${name}`));
      return parsedArray;
    })
    .catch((err) => console.error(`Erro ao ler o arquivo: ${err}`));
}

function findCharacterById(id) {
  return new Promise((resolve, reject) => {
    showAllCharacters().then((r) => {
      const res = r.find((char) => Number(char.id) === id);
      if (res.length === 0) reject("id não encontrado");
      resolve(res);
    });
  });
}

findCharacterById(2).then((r) => console.log(r));
