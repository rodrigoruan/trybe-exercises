const assert = require('assert');

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (payable > paid) throw new Error('paid value is not enough');
  if (payable === paid) return [];


//  Adicionando a função mais criminosa do universo 
  let arr = [];
  for (let i = 0; i < remaining; i) {
    if (remaining >= 200) {arr.push(200); remaining -= 200;}
    else if (remaining >= 100) {arr.push(100); remaining -= 100;}
    else if (remaining >= 50) {arr.push(50); remaining -= 50;}
    else if (remaining >= 20) {arr.push(20); remaining -= 20;}
    else if (remaining >= 10) {arr.push(10); remaining -= 10;}
    else if (remaining >= 5) {arr.push(5); remaining -= 5;}
    else if (remaining >= 2) {arr.push(2); remaining -= 2;}
    else {arr.push(1); remaining -= 1;};
  }

  return arr;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => {
  getChange(100, 10);
}, /^Error: paid value is not enough$/);
