let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = numbers[0];

for (let number of numbers) {
  if(number < lowestNumber)
  lowestNumber = number;
}

console.log(lowestNumber)