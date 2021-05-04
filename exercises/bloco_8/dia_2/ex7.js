const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

//  Usando o new Set XABLAU
// const authorUnique = () => books.map((c) => c.author.birthYear).length === [...new Set(books.map((c) => c.author.birthYear))];

//  O indexOf retorna o primeiro índice em que o elemento pode ser encontrado no array, então caso tenha algum repetido, o indíce que irá contar é o primeiro, assim o filter vai verificar que o valor é diferente e guardar o elemento, caso o length seja diferente de 0, significa que algum elemento se repetiu.
// const authorUnique = () =>
//   books
//     .map((c) => c.author.birthYear)
//     .filter((v, i) => books.map((c) => c.author.birthYear).indexOf(v) !== i)
//     .length !== 1;

function authorUnique() {
  const arr = [];
  books.forEach((element) =>
    arr.includes(element.author.birthYear)
      ? arr.push(false)
      : arr.push(element.author.birthYear)
  );
  return !arr.some((c) => c);
}

console.log(authorUnique());

assert.strictEqual(authorUnique(), expectedResult);
