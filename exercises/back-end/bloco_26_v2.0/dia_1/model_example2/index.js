const express = require('express');

const Books = require('./model/Books');

const app = express();

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(Number(id));

  res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Books.findAuthorById(Number(id));

  res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
