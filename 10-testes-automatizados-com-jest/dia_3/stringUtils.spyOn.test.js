const stringUtils = require('./stringUtils');

test('stringUtils mock toUpperCase implementation and retore', () => {
  jest
    .spyOn(stringUtils, 'toUpperCase')
    .mockImplementation((str) => str.toUpperCase());

  expect(stringUtils.toUpperCase).toBeCalledTimes(0);
  expect(stringUtils.toUpperCase('hi')).toBe('HI');
  expect(stringUtils.toUpperCase).toBeCalledWith('hi');

  stringUtils.toUpperCase.mockRestore();
  expect(stringUtils.toUpperCase('hello')).toBe('HELLO');
});
