const connection = require('./connections');

const validate = (title, author_id, authorExists) => {
  if (!title || title.length < 3) return false;
  if (!author_id || !authorExists) return false;

  return true;
};

const createNewBook = async (title, author_id) => {
  const [authors] = await connection.execute(
    'SELECT * FROM authors WHERE id=?',
    [author_id]
  );

  const authorExists = authors.some(
    (author) => author.id === Number(author_id)
  );

  if (!validate(title, author_id, authorExists)) {
    return 'Dados inválidos';
  }

  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (? ,?)',
    [title, author_id]
  );

  return 'Livro criado com sucesso';
};

const getByAuthorId = async (q) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: q }).toArray())
    .then((books) => books);
};

const findBookById = async (q) => {
  const [books] = await connection.execute('SELECT * FROM books WHERE id=?', [
    q,
  ]);

  return books;
};

const findAuthorById = async (q) => {
  const [books] = await connection.execute(
    `SELECT * FROM authors WHERE id = ${q}`
  );

  return books;
};

const getAllBooks = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books);
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  findAuthorById,
  findBookById,
  createNewBook,
};
