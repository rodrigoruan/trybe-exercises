const connection = require('./connection');

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const getUserById = async (id) => {
  const [users] = await connection.execute('SELECT * FROM users WHERE id = ?', [
    id,
  ]);

  return users;
};

const updateUserById = async (id, firstName, lastName, email, password) => {
  const [user] = await connection.execute(
    'UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id=?',
    [firstName, lastName, email, password, id]
  );

  return user;
};

const createUser = async (firstName, lastName, email, password) => {
  if ([firstName, lastName, email, password].includes(undefined)) return false;
  if (password.length <= 6) return false;

  return connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
};

module.exports = { createUser, getAllUsers, getUserById, updateUserById };
