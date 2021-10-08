const express = require('express');

const Books = require('./model/Books');

const app = express();

app.use(express.json());

app.get('/books/author/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(Number(id));

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findBookById(id);

  // if (!book) return res.status(400).json({ message: 'book not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const response = await Books.createNewBook(title, author_id);

  if (response === 'Dados inválidos') {
    return res.status(400).json({ message: 'dados invalidos' });
  }

  res.status(200).json({ message: 'Livro criado com sucesso' });
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
