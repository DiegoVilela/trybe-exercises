const { obj1, obj2, obj3 } = require('./exercise5');

describe('Exercise 5', () => {
  it('Objects are identical', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Objects are not identical', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
