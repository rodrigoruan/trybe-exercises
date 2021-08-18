const getUserName = require('./ex3');

test('test if promise return id', async () => {
  expect.hasAssertions();
  const name = await getUserName(4);
  expect(name).toBe('Mark');
});

test('test if promise return error', async () => {
  expect.hasAssertions();
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  }
});
