const sumOfAll = () => {
  const arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.round(Math.random() * 50) ** 2);
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  if (sum < 8000) return sum;
  else throw new Error();
};

const division = (sum) => [2, 3, 5, 10].map((value) => sum / value);

const divisionSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const promise = async () => {
  try {
    const sum = sumOfAll();
    const divisions = division(sum);
    const sumDivision = divisionSum(divisions);
    console.log(
      `Sum: ${sum} \nDivision: ${divisions}\nSum of Array: ${sumDivision}`
    );
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

promise();
