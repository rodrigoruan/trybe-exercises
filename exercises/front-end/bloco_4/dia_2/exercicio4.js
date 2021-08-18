// Código do exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sumOfNum += numbers[i];
}

let medianOfNum = sumOfNum / numbers.length;
// Código do exercicio 4

if (medianOfNum > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
