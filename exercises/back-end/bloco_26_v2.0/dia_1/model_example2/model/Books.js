const connection = require('./connections');

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books;
};

module.exports = { getAllBooks };
