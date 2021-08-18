let numbers = [];
let numbersByTwo = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}
for (let i = 0; i < numbers.length; i += 1) {
  numbersByTwo.push(numbers[i] / 2);
  console.log(numbersByTwo[i]);
}
