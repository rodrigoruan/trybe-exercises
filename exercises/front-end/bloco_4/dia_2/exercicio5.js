let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNum = 0;

for (let number of numbers) {
  if (number > biggestNum) {
    biggestNum = number;
  }
}
console.log(biggestNum);
