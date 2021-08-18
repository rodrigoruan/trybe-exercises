const { upperCase, firstLetter, concatStrings } = require('./ex4');
jest.mock('./ex4');

test('lowerCase', () => {
  upperCase.mockImplementation((str) => str.toLowerCase());
  expect(upperCase('RODRIGO')).toBe('rodrigo');
  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledWith('RODRIGO');
});

test('last letter', () => {
  firstLetter.mockImplementation((str) => str[str.length - 1]);
  expect(firstLetter('xablau')).toBe('u');
  expect(firstLetter).toHaveBeenCalled();
  expect(firstLetter).toHaveBeenCalledWith('xablau');
});

test('concat three strings', () => {
  concatStrings.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
  expect(concatStrings('rodrigo ', 'jean ', 'tales')).toBe('rodrigo jean tales');
  expect(concatStrings).toHaveBeenCalled();
  expect(concatStrings).toHaveBeenCalledWith('rodrigo ', 'jean ', 'tales');
});
