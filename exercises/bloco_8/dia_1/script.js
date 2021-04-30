//  Exercicio 1
const newEmployees = () => {
  const employees = {
    id1: (nome) => {
      return {
        nomeCompleto: nome,
        email: `${nome.toLowerCase().replace(/ /g, '_')}@trybe.com`,
      };
    }, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: (nome) => {
      return {
        nomeCompleto: nome,
        email: `${nome.toLowerCase().replace(/ /g, '_')}@trybe.com`,
      };
    }, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: (nome) => {
      return {
        nomeCompleto: nome,
        email: `${nome.toLowerCase().replace(/ /g, '_')}@trybe.com`,
      };
    }, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  };
  return employees;
};

console.log(newEmployees().id1('Pedro Guerra'));
console.log(newEmployees().id2('Luiza Drumond'));
console.log(newEmployees().id3('Carla Paiva'));

