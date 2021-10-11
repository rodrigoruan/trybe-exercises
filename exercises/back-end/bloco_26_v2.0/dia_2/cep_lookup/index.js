const express = require('express');

const CepFunctions = require('./services/Cep');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/ping', async (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/cep', async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const response = await CepFunctions.createNewCep(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );

  if (response.error) {
    res.status(400).json(response);
  }

  res.status(201).json(response);
});

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;

  const response = await CepFunctions.findCep(cep);

  if (response.error) {
    return res.status(400).json(response);
  }

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});
