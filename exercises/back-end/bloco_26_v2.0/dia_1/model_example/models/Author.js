const connection = require('./connection');

function authorFullName(first_name, middle_name, last_name) {
  return [first_name, middle_name, last_name].filter((name) => name).join(' ');
}

function toCamelCase({ id, first_name, middle_name, last_name }) {
  return {
    id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name,
    fullName: authorFullName(first_name, middle_name, last_name),
  };
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) => ({
        id: _id,
        firstName,
        middleName,
        lastName,
      }))
    );
};

module.exports = {
  getAll,
};
