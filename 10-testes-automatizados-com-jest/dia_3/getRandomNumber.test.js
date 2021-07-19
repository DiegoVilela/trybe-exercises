const { getRandomNumber } = require('./main');

jest.mock('./main');

describe('Testing getRandomNumber', () => {
  it('should return a random number', () => {
    getRandomNumber.mockReturnValue(10);

    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
});
