const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    const list = Animals.filter((animal) => animal.age === age);
    if (list.length) return resolve(list);
    return reject('Nenhum animal encontrado!');
  });

const getAnimalByAge = async (age) => {
  return await findAnimalByAge(age);
};

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o a idade', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      expect.hasAssertions();
      const animals = [{ name: 'Soneca', age: 2, type: 'Dog' }];
      return expect(getAnimalByAge(2)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.hasAssertions();
      return expect(getAnimalByAge(3123)).rejects.toBe(
        'Nenhum animal encontrado!'
      );
    });
  });
});
