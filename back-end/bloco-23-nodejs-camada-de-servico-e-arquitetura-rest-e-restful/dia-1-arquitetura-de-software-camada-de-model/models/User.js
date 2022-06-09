const { use } = require('express/lib/application');
const connection = require('./connection');

// Cadastra usuário
const createUser = (firstName, lastName, email, password) => connection.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
  [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email })); // essa última linha retorna o usuário cadastrado. https://thewebdev.info/2022/03/06/how-to-retrieve-the-last-inserted-id-with-node-js-mysql/

// Converte o nome dos campos de snake_case para camelCase
const serialize = (data) => ({
  id: data.id,
  firstName: data.first_name,
  lastName: data.last_name,
  email: data.email,
  password: data.password
});

// Busca todos usuários do banco
const getAllUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM users_crud.users;',
  );
  return users.map(serialize);
};

// Busca usuário por ID
const getUserById = async (id) => {
  const [users] = await connection.execute(
    'SELECT * FROM users_crud.users WHERE id=?;', [Number(id)]
  );
  console.log(users);
  return users.map(serialize);
};

// Atualiza usuário
const updateUser = async (id, firstName, lastName, email, password) => {
  await connection.execute(
    'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );

  return await getUserById(id);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser
}