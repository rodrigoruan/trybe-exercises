const funcs = require('./ex2');

test('testing encode function', () => {
  expect(typeof funcs.encode).toBe('function');
  expect(funcs.encode('aeiou')).toBe('12345');
  expect(funcs.encode('fghjkl')).toBe('fghjkl');
  expect(funcs.encode('Hello World').length).toBe(11);
});

test('testing decode function', () => {
  expect(typeof funcs.decode).toBe('function');
  expect(funcs.decode('12345')).toBe('aeiou');
  expect(funcs.decode('fghjkl')).toBe('fghjkl');
  expect(funcs.encode('Hello World').length).toBe(11);
});
