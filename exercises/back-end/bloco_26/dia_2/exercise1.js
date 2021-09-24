function func(a, b, c) {
  return new Promise((resolve, reject) => {
    if ([a, b, c].some((num) => typeof num !== "number")) {
      reject(Error("Informe apenas números"));
    }

    const total = (a + b) * c;

    if (total < 50) reject(Error("Valor muito baixo"));
    resolve(total);
  });
}

func(1, 1, 10)
  .then((r) => console.log(r))
  .catch((err) => console.log(err.message));
