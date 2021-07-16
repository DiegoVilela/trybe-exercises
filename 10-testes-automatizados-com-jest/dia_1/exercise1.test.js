const sum = require('./exercise1');

describe('Exercise 1', () => {
  it('4 + 5 = 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('0 + 0 = 0', () => {
    expect(0).toBe(sum(0, 0));
  });

  it('4 + "5" throws an exception', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  it('4 + "5" throws exception with the right message', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});
