const connection = require('./connections');

const getByAuthorId = async (q) => {
  const [books] = await connection.execute(
    `SELECT * FROM books WHERE author_id = ${q}`
  );

  return books;
};

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books;
};

module.exports = { getAllBooks, getByAuthorId };
