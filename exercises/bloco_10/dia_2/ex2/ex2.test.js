const getUserName = require('./ex2');

test('test if promise return id', () => {
  expect.hasAssertions();
  return getUserName(4).then((name) => {
    expect(name).toBe('Mark');
  });
});

test('test if promise return error', () => {
  return getUserName(6).catch((error) => {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  });
});
