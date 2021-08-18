const randomNumber = require('./ex1');
jest.mock('./ex1');

test('Random Number', () => {
  randomNumber.mockReturnValue(10);
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber()).toBe(10);
});
