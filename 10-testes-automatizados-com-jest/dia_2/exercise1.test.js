const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// uppercase('oi', console.log);

test('it returns the uppercase version of the string', done => {
  uppercase('go up', (str) => {
    expect(str).toBe('GO UP');
    done();
  });
});
