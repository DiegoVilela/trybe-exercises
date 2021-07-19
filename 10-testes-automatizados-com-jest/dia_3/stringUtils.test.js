const { toUpperCase, getFirstLetter, concat } = require('./stringUtils');

jest.mock('./stringUtils');

describe('Testing stringUtils', () => {
  describe('Mocking the implementation of toUpperCase', () => {
    it('should return the string in lowercase', () => {
      toUpperCase.mockImplementation((str) => str.toLowerCase());

      expect(toUpperCase("What's Up?")).toBe("what's up?");
      expect(toUpperCase).toHaveBeenCalled();
    });
  });

  describe('Mocking the implementation of getFistLetter', () => {
    it('should return the last letter of the string', () => {
      getFirstLetter.mockImplementation((str) => str[str.length -1]);

      expect(getFirstLetter('Trybe')).toBe('e');
      expect(getFirstLetter).toBeCalledWith('Trybe');
    });
  });

  describe('Mocking the implementation of concat', () => {
    it('should return the concatenation of three strings', () => {
      concat.mockImplementation((a, b, c) => `${a}${b}${c}`);

      expect(concat('Jav', 'aSc', 'ript')).toBe('JavaScript');
      expect(concat).toBeCalled();
    });
  });
});
