const { ObjectID } = require('mongodb');
const connection = require('./connections');

const getAllUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((r) => r);
};

const getUserById = async (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(ObjectID(id)))
    .then((r) => r);
};

const createNewUser = async (firstName, lastName, email, password) => {
  if ([firstName, lastName, email, password].includes(undefined)) return false;
  if (password.length <= 6) return false;

  return connection()
    .then((db) =>
      db.collection('users').insertOne({ firstName, lastName, email, password })
    )
    .then((r) => ({ id: r.insertedId, firstName, lastName, email, password }));
};

module.exports = { createNewUser, getAllUsers, getUserById };
