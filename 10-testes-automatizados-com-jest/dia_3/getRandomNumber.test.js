const { getRandomNumber } = require('./main');

jest.mock('./main');
getRandomNumber.mockReturnValue(10);

describe('Testing getRandomNumber', () => {
  it('should return a random number', () => {
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

  it('should return the multiplication of three numbers', () => {
    getRandomNumber.mockImplementationOnce((a, b, c) => a * b * c);

    expect(getRandomNumber(2, 3, 4)).toBe(24);
    expect(getRandomNumber).toBeCalledWith(2, 3, 4);
    expect(getRandomNumber).toBeCalledTimes(4);
    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toBeCalledTimes(5);
  });

  it('should return the double of a number', () => {
    getRandomNumber.mockImplementationOnce((n) => n * 2);

    expect(getRandomNumber(3)).toBe(6);
    expect(getRandomNumber).toBeCalledWith(3);
    expect(getRandomNumber).toBeCalledTimes(6);
    expect(getRandomNumber()).toBe(10);
  });
});
