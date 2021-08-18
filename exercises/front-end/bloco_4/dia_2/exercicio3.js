let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sumOfNum += numbers[i];
}

let medianOfNum = sumOfNum / numbers.length;
console.log(medianOfNum)