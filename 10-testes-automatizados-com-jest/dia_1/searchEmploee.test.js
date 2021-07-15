const searchEmployee = require('./searchEmploee');

describe('Test searchEmploee function', () => {
  it('Test whether searchEmploee is denined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Test whether searchEmploee function exists', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('When recieving an `id` and the information wanted, retuns the correct data', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  it('Throw the correct exception when `id` informed does not exist', () => {
    expect(() => { searchEmployee('9999-9', 'lastName') }).toThrowError(new Error('ID não identificada'));
  });

  it('Throw the correct exception when information wanted is not available', () => {
    expect(() => { searchEmployee('8579-6', 'address') }).toThrowError(new Error('Informação indisponível'));
  });
});
