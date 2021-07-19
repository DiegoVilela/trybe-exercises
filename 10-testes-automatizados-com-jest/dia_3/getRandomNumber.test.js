const { getRandomNumber } = require('./main');

jest.mock('./main');

describe('Testing getRandomNumber', () => {
  it('should return a random number', () => {
    getRandomNumber.mockReturnValue(10);

    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });

  it('should return the division of to numbers', () => {
    getRandomNumber.mockImplementationOnce((a, b) => a / b);

    expect(getRandomNumber(10, 2)).toBe(5);
    expect(getRandomNumber).toHaveBeenCalledTimes(2);
    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toHaveBeenCalledTimes(3);
  });
});
