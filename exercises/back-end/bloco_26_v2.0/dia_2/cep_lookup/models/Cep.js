const connection = require('./connection');
// https://stackoverflow.com/questions/69055506/how-to-fix-must-use-import-to-load-es-module-discord-js
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fetchCEPInfos = async (cep) =>
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((r) => r.json())
    .then((result) => result)
    .catch((err) => err);

const createNewCep = async (cep, log, bairro, local, uf) =>
  connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, log, bairro, local, uf]
  );

const findCep = async (cep) => {
  const [returnedCep] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep]
  );

  return returnedCep;
};

module.exports = {
  findCep,
  createNewCep,
  fetchCEPInfos,
};
