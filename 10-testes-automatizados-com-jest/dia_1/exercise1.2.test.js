const { encode, decode } = require('./exercise1.2');

describe('Exercise 1 of parte 2', () => {
  it('encode is a function', () => {
    expect(typeof (encode)).toEqual('function');
  });

  it('decode is a function', () => {
    expect(typeof (decode)).toEqual('function');
  });

  it('encode("aeiou") returns "12345"', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('decode("12345") returns "aeiou"', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('encode("trybe") returns "tryb2"', () => {
    expect(encode('trybe')).toEqual('tryb2');
  });

  it('decode("tryb2") returns "trybe"', () => {
    expect(decode('tryb2')).toEqual('trybe');
  });

  it('encode returns the same number of characters of the parameter passed', () => {
    expect(encode('javascript').length).toBe(10);
  });

  it('decode returns the same number of characters of the parameter passed', () => {
    expect(decode('j1v1scr3pt').length).toBe(10);
  });
});
