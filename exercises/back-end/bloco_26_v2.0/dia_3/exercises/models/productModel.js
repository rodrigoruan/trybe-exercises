const { ObjectID } = require('mongodb');
const connection = require('./connection');

const add = async (name, brand) => {
  return connection()
    .then((db) => db.collection('produtos').insertOne({ name, brand }))
    .then((result) => ({ id: result.insertId, name, brand }))
    .catch((err) => err);
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('produtos').find().toArray())
    .then((r) => r)
    .catch((err) => err);
};

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('produtos').findOne({ _id: ObjectID(id) }))
    .then((r) => r)
    .catch((err) => err);
};

const update = async (id, name, brand) => {
  return connection()
    .then((db) =>
      db
        .collection('produtos')
        .updateOne({ _id: ObjectID(id) }, { $set: { name, brand } })
    )
    .then(() => ({ id: ObjectID(id), name, brand }))
    .catch((err) => err);
};

const exclude = async (id) => {
  return connection()
    .then((db) => db.collection('produtos').deleteOne({ _id: ObjectID(id) }))
    .then((r) => r)
    .catch((err) => err);
};

module.exports = { add, getAll, getById, update, exclude };
