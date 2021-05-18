const techList = (arr, nome) => !arr.length ? 'Vazio!' :
  arr.sort().reduce((acc, value) => acc.concat({ tech: value, name: nome }) ,[]);

module.exports = { techList };
