const assert = require('assert');
// escreva a função removeMiddle aqui

//  O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
const removeMiddle = (arr) => arr.splice([Math.floor(arr.length / 2)], 1);

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
