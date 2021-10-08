const express = require('express');

const User = require('./model/User');

const app = express();

app.use(express.json());

app.get('/user', async (_req, res) => {
  const response = await User.getAllUsers();

  res.status(200).json(response);
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const response = await User.createNewUser(
    firstName,
    lastName,
    email,
    password
  );

  if (!response) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(200).json(response);
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
