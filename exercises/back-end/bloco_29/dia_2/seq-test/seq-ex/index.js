const express = require('express');

const { Book } = require('./models');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
