const express = require('express');

const app = express();

const User = require('./model/User');

app.use(express.json());

app.post('/user', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const response = User.createNewUser(firstName, lastName, email, password);

  if (!response) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(200).json({ message: 'Usuario criado com sucesso' });
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
