const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// const containsA = () => names.join('').replace(/[^A]/gi, '').length;

//  essa de baixo foi só pra não falar que não usei reduce kkkkk.
const containsA = () =>
  names
    .map((c) => c.replace(/[^A]/gi, '').length)
    .reduce((acc, curr) => acc + curr);

assert.deepStrictEqual(containsA(), 20);
