const express = require('express');

const Authors = require('./models/Author');

const app = express();

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});

app.listen(3003, () => {
  console.log(`Ouvindo a porta 3003`);
});
