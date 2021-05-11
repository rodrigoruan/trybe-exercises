
const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = () => arrays.reduce((a, b) => a.concat(b));

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
