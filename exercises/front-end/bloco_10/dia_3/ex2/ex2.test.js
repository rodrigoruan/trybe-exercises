const randomNumber = require('./ex2');
jest.mock('./ex2');

test('divisão', () => {
  randomNumber.mockImplementation((a, b) => a / b);
  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledWith(10, 2);
});
