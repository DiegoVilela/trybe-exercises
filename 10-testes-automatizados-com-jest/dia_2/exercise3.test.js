const { users, findUserById, getUserName } = require('./main');

describe('Testing findUserById using promise sintaxe', () => {
  describe('When the `id` exists', () => {
    it('should return the `user` object', async () => {
      const user = await findUserById(5);
      const expected = { name: 'Paul' };
      expect(user).toEqual(expected);
    });
  });

  describe('When the `id` does not exist', () => {
    it('should return an object with an `error` key', async () => {
      const expected = { error: 'User with id 7 not found.' };
      try {
        await findUserById(7);
      } catch (e) {
        expect(e).toEqual(expected);  
      }
    });
  });
});
