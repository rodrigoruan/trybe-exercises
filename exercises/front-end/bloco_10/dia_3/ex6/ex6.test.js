const fetchApi = require('./ex6');
jest.mock('./ex6');

test('testing if promisse is aproved', () => {
  fetchApi.mockResolvedValue('sucess');

  expect(fetchApi()).resolves.toBe('sucess');
  expect(fetchApi).toHaveBeenCalled();
});

test('testing if promisse is rejected', () => {
  fetchApi.mockRejectedValue('fail');

  expect(fetchApi()).rejects.toBe('fail');
  expect(fetchApi).toHaveBeenCalled();
});
