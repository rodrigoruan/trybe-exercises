const express = require('express');

const Books = require('./model/Books');

const app = express();

app.get('/books', async (_req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
