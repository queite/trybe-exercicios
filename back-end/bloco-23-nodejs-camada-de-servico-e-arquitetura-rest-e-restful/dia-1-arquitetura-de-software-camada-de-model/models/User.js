const connection = require('./connection');

const createUser = (firstName, lastName, email, password) => connection.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
  [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));

module.exports = {
  createUser,
}