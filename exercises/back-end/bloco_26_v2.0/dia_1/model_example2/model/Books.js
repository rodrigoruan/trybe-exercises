const connection = require('./connections');

const getByAuthorId = async (q) => {
  const [books] = await connection.execute(
    `SELECT * FROM authors WHERE author_id = ${q}`
  );

  return books;
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
  const [books] = await connection.execute('SELECT * FROM books');

  return books;
};

module.exports = { getAllBooks, getByAuthorId, findAuthorById, findBookById };
