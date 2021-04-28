const assert = require('assert');

const removeVowels = (word) => {
  const letters = word.replace(/[aeiou]/g, '°').split('');
  let count = 1,
    arr = [];
  for (let i of letters) {
    if (i === '°') {
      arr.push(count);
      count += 1;
    } else arr.push(i);
  }
  return arr.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';
assert.deepStrictEqual(removeVowels(parameter), result);
