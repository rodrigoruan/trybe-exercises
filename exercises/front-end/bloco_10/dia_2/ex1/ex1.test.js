const uppercase = require('./ex1.js');

test('verify if function transform string in uppercase', () => {
  expect.hasAssertions();
  uppercase('rodrigo', async (name) => {
    await expect(name).toBe('RODRIGO');
  });
});
