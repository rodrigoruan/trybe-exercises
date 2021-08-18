const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (arr) => arr.map((c) => c.split('').length);

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
