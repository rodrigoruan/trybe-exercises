const connection = require('./connection');

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
};
