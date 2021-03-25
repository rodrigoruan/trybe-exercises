let numbers = [4, 10, 6, 21, 70, 8, 100, 2, 36, 28];
let oddNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers += 1;
  }
}

if (oddNumbers > 0) {
  console.log(`Foram encontrados ${oddNumbers} números ímpares`);
} else {
  console.log(`Não foi encontrado nenhum número ímpar`);
}
