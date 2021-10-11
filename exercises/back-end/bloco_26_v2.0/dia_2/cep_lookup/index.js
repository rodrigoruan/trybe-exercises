const express = require('express');
const Cep = require('./controllers/Cep');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/ping', Cep.ping);

app.post('/cep', Cep.createNewCep);

app.get('/cep/:cep', Cep.findCep);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});
