const myFizzBuzz = require('./exercise4');

describe('Exercise 4', () => {
  it('myFizzBuzz(15) returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('myFizzBuzz(9) returns "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  it('myFizzBuzz(7) returns 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('myFizzBuzz("a") returns false', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});
