const express = require('express');

const CepFunctions = require('./models/Cep');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/ping', async (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/')

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;

  const response = await CepFunctions.findCep(cep);

  if (!response) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});
