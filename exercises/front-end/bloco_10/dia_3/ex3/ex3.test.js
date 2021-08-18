const randomNumber = require('./ex3');
jest.mock('./ex3');

test('multiplicação e dobro', () => {
  randomNumber.mockImplementation((a, b, c) => a * b * c);
  expect(randomNumber(2, 2, 2)).toBe(8);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);

  randomNumber.mockRestore();

  randomNumber.mockImplementation((value) => value * 2);
  expect(randomNumber(2)).toBe(4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledWith(2);
});
