const func = require('./ex5');

test('lowerCase', () => {
  const upper = jest.spyOn(func, 'upperCase').mockImplementation((str) => str.toLowerCase());
  expect(upper('RODRIGO')).toBe('rodrigo');
  expect(upper).toHaveBeenCalled();
  expect(upper).toHaveBeenCalledWith('RODRIGO');

  func.upperCase.mockRestore();

  expect(func.upperCase('rodrigo')).toBe('RODRIGO')
});
