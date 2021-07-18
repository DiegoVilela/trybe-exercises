const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animalObj = Animals.find((animal) => animal.name === name);
    if (animalObj) {
      return resolve(animalObj);
    }

    return reject('Nenhum animal com esse nome!');
  })
);

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    const animals = Animals.filter((animal) => animal.age === age);
    if (animals.length !== 0) {
      return resolve(animals);
    }

    return reject('Nenhum animal com essa idade!');
  })
);

const getAnimal = (name) => findAnimalByName(name).then(animal => animal);

const getAnimalsByAge = (age) => findAnimalsByAge(age).then(animals => animals);

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existem animais com a idade procurada', () => {
    test('Retorne uma lista de objetos animais', () => {
      expect.assertions(1);
      return getAnimalsByAge(2).then(animals => {
        expect(animals).toEqual([
          { name: 'Soneca', age: 2, type: 'Dog' }
        ]);
      });
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
