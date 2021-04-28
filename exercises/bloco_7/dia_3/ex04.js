const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'O número é divisível por 3 e por 5, por isso deve retornar "fizzbuzz"');
assert.strictEqual(myFizzBuzz(3), 'fizz', 'O número é divisível apenas por 3, por isso deve retornar "fizz"');
assert.strictEqual(myFizzBuzz(5), 'buzz', 'O número é divisível apenas por 5, por isso deve retornar "buzz"');
assert.strictEqual(myFizzBuzz(7), 7, 'O número não é divisível por 3 nem por 5, por isso deve retornar "7"');
assert.strictEqual(myFizzBuzz('xablau'), false, 'O parâmetro passado não é um número, então deve retornar false');