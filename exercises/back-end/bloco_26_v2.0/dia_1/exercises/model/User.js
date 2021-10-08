const connection = require('./connection');

function createNewUser(firstName, lastName, email, password) {
  if ([firstName, lastName, email, password].includes(undefined)) return false;

  return connection().then((db) =>
    db.collection('users').insertOne({ firstName, lastName, email, password })
  );
}

module.exports = { createNewUser };
