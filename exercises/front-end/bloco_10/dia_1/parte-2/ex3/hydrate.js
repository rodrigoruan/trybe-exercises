function hydrate(str) {
  let copos = str.match(/\d+?/g).reduce((acc, curr) => acc + +curr, 0);
  return copos === 1 ? `1 copo de água` : `${copos} copos de água`;
}

console.log(hydrate('1 cerveja'));

module.exports = { hydrate };
