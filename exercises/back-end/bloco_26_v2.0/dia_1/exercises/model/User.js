const connection = require('./connections');

async function getAllUsers() {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((r) => r);
}

async function createNewUser(firstName, lastName, email, password) {
  if ([firstName, lastName, email, password].includes(undefined)) return false;
  if (password.length <= 6) return false;

  return connection()
    .then((db) =>
      db.collection('users').insertOne({ firstName, lastName, email, password })
    )
    .then((r) => ({ id: r.insertedId, firstName, lastName, email, password }));
}

module.exports = { createNewUser, getAllUsers };
