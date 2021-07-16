const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('it returns the uppercase version of the string', done => {
  uppercase('go up', (str) => {
    expect(str).toBe('GO UP');
    done();
  });
});
