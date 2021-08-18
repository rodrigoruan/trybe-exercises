const assert = require('assert');

const verify = (s) =>
  s.length >= 8 && /[a-z]/.test(s) && /[A-Z]/.test(s) && /\d/.test(s);

assert.deepStrictEqual(verify('Rodrigo123'), true);
assert.deepStrictEqual(verify('a'), false);
assert.deepStrictEqual(verify('abcdefghij23'), false);
assert.deepStrictEqual(verify('DASIOJDS123'), false);
assert.deepStrictEqual(verify('AbCdE12345'), true);
