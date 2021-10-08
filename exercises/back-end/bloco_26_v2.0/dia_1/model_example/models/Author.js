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
  const [authors] = await connection.execute(
    'SELECT * FROM model_example.authors'
  );

  return authors.map((author) => toCamelCase(author));
};

module.exports = {
  getAll,
};
