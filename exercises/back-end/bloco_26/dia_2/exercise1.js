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

// function findCharacterById(id) {
//   return new Promise((resolve, reject) => {
//     showAllCharacters().then((r) => {
//       const res = r.find((char) => Number(char.id) === id);
//       if (res.length === 0) reject("id não encontrado");
//       resolve(res);
//     });
//   });
// }

// function removeCharacters() {
//   return new Promise((resolve, reject) => {
//     showAllCharacters().then((r) => {
//       const res = r.filter((char) => ![10, 6].includes(Number(char.id)));
//       fs.writeFile("simpsons.json", JSON.stringify(res))
//         .then(() => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(Error("Erro"));
//         });
//     });
//   });
// }

// function createSimpsonFamily() {
//   return new Promise((resolve, reject) => {
//     showAllCharacters().then((r) => {
//       const res = r.filter((char) => [1, 2, 3, 4].includes(Number(char.id)));
//       fs.writeFile("simpsonFamily.json", JSON.stringify(res))
//         .then(() => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(Error("Erro"));
//         });
//     });
//   });
// }

// function addNelsonToFamily() {
//   return new Promise((resolve, reject) => {
//     showAllCharacters().then((r) => {
//       const res = r.filter((char) => [1, 2, 3, 4].includes(Number(char.id)));
//       fs.writeFile(
//         "simpsonFamily.json",
//         JSON.stringify([...res, { id: 999, name: "Nelson Muntz" }])
//       )
//         .then(() => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(Error("Erro"));
//         });
//     });
//   });
// }

function changeNelsonByMaggie() {
  return new Promise((resolve, reject) => {
    showAllCharacters().then((r) => {
      fs.readFile("simpsonFamily.json", "utf8").then((r) => {
        const res = JSON.parse(r);
        const newArray = res.map((char) =>
          char.id === 999 ? { name: "Maggie Simpsons", id: 999 } : char
        );

        fs.writeFile("simpsonFamily.json", JSON.stringify(newArray))
          .then(() => {
            resolve(newArray);
          })
          .catch((err) => {
            reject(Error("Erro"));
          });
      });
    });
  });
}

changeNelsonByMaggie();
