const myRemoveWithoutCopy = require('./exercise3');

describe('Exercise 3', () => {
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) removes item 3 from origial array', () => {
    const origialArray = [1, 2, 3, 4];
    myRemoveWithoutCopy(origialArray, 3);
    expect(origialArray).toEqual([1, 2, 4]);
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('The original array was changed', () => {
    const origialArray = [1, 2, 3];
    myRemoveWithoutCopy(origialArray, 1);
    expect(origialArray).toEqual([2, 3]);
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
