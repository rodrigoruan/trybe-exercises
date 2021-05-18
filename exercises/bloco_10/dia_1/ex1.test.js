const funcs = require('./ex1');

test('testing sum function', () => {
  expect(funcs.sum(4, 5)).toBe(9);
  expect(funcs.sum(0, 0)).toBe(0);
});

test('testing myRemove function', () => {
  expect(funcs.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(funcs.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  const arr = [12, 15, 27, 38];
  funcs.myRemove(arr, 15);
  expect(funcs.myRemove(arr)).toEqual([12, 15, 27, 38]);
  expect(funcs.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('testing myRemoveWithoutCopy function', () => {
  expect(funcs.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(funcs.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  const arr2 = [12, 15, 27, 38];
  funcs.myRemoveWithoutCopy(arr2, 15);
  expect(funcs.myRemoveWithoutCopy(arr2)).toEqual([12, 27, 38]);
  expect(funcs.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('testing myFizzBuzz function', () => {
  expect(funcs.myFizzBuzz(15)).toEqual('fizzbuzz');
  expect(funcs.myFizzBuzz(3)).toEqual('fizz');
  expect(funcs.myFizzBuzz(5)).toEqual('buzz');
  expect(funcs.myFizzBuzz(7)).toEqual(7);
  expect(funcs.myFizzBuzz('Hello World')).toEqual(false);
});

test('testing Objects Json', () => {
  expect(funcs.obj1).toEqual(funcs.obj2);
  expect(funcs.obj1).not.toEqual(funcs.obj3);
  expect(funcs.obj2).not.toEqual(funcs.obj3);
});
