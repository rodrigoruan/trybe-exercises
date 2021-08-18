const promise = new Promise((resolve, reject) => {
  let arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.round(Math.random() * 50) ** 2);
  }

  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  if (sum < 8000) {
    resolve('Promise resolvida');
  } else {
    reject('Promise rejeitada');
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
})
  .then((resolucao) => {
    return [2, 3, 5, 10].map((value) => sum / value);
  })
  .catch((error) => console.log(error));
