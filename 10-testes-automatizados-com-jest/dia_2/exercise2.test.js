const { users, findUserById, getUserName } = require('./main');

describe('Testing findUserById using promise sintaxe', () => {
  describe('When the `id` exists', () => {
    it('should return the `user` object', () => {
      const expected = { name: 'Paul' };
      expect.assertions(1);
      return expect(findUserById(5)).resolves.toEqual(expected);
    });
  });

  describe('When the `id` does not exist', () => {
    it('should return an object with an `error` key', () => {
      const expected = { error: 'User with id 7 not found.' };
      expect.assertions(1);
      return expect(findUserById(7)).rejects.toEqual(expected);
    });
  });
});
