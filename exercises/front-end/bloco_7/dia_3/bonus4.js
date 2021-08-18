const assert = require('assert');

const getLargestNumber = (array) => Math.max(...array);

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
assert.deepStrictEqual(getLargestNumber(parameter), result);
