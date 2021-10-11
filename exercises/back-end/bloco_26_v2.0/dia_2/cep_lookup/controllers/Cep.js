const rescue = require('express-rescue');
const CepFunctions = require('../services/Cep');

const createNewCep = rescue(async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const response = await CepFunctions.createNewCep(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );

  const CODE = response.error ? 400 : 201;

  res.status(200).json(response);
});

const findCep = rescue(async (req, res) => {
  const { cep } = req.params;

  const response = await CepFunctions.findCep(cep);

  const CODE = response.error ? 400 : 200;

  res.status(CODE).json(response);
});

const ping = rescue(async (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

module.exports = {
  createNewCep,
  findCep,
  ping,
};
