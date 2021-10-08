const { ObjectID } = require('mongodb');
const connection = require('./connections');

const validate = (title, author_id, authorExists) => {
  if (!title || title.length < 3) return false;
  if (!author_id || authorExists) return false;

  return true;
};

const createNewBook = async (title, author_id) => {
  const author = connection()
    .then((db) => db.collection('authors').findOne(ObjectID(author_id)))
    .then((authors) => !authors._id)
    .catch((err) => err);

  if (!validate(title, author_id, !author)) {
    return 'Dados inválidos';
  }

  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
    .then((r) => console.log(r));

  return 'Livro criado com sucesso';
};

const getByAuthorId = async (q) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: q }).toArray())
    .then((books) => books);
};

const findBookById = async (q) => {
  return connection()
    .then((db) => db.collection('books').findOne(ObjectID(q)))
    .then((book) => book);
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
