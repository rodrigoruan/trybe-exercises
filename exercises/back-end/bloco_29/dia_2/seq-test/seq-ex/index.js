const express = require('express');

const { Book } = require('./src/models');

const app = express();

app.use(express.json());

app.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const newBook = await Book.create({ title, author, pageQuantity });

    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updatedBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Book.destroy({ where: { id } });

    res.status(200).json({ message: 'Livro excluido com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
