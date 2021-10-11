const Cep = require('../models/Cep');

const createNewCep = async (cep, log, bairro, local, uf) => {
  if ([cep, log, bairro, local, uf].includes(undefined)) {
    return { error: { code: 'invalidData', message: 'Preencha todos campos' } };
  }

  if (!/^\d{5}-?\d{3}$/.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const returnedCep = await Cep.findCep(cep);

  if (returnedCep[0]) {
    return {
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
  }

  const cepInfo = await Cep.fetchCEPInfos(cep);

  if (cepInfo.erro) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  await Cep.createNewCep(cep, log, bairro, local, uf);

  return { cep, log, bairro, local, uf };
};

const findCep = async (cep) => {
  if (!/^\d{5}-?\d{3}$/.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const returnedCep = await Cep.findCep(cep);

  if (!returnedCep.length) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return returnedCep[0];
};

module.exports = { findCep, createNewCep };
