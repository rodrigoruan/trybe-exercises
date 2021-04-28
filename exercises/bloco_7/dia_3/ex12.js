const assert = require('assert');

const greaterThanTen = (array) => array.sort((a, b) => b - a).slice(0, 2);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
assert.deepStrictEqual(greaterThanTen(parameter), result);
