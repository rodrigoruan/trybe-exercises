const promise = new Promise((resolve, reject) => {
  const arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.round(Math.random() * 50) ** 2);
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  return sum < 8000
    ? resolve(sum)
    : reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
  .then((sum) => [2, 3, 5, 10].map((value) => sum / value))
  .then((arr) => arr.reduce((acc, curr) => acc + curr, 0))
  .catch((error) => console.log(error));
