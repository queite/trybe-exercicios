const express = require('express');
const bodyParser = require("body-parser");
const schemas = require('./helpers/schemas');
const validateUser = require('./middlewares/validateUser');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
  const users = await User.getAllUsers();
  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const {id} = req.params;
  console.log(id);
  const user = await User.getUserById(id);
  if (!user) return res.status(404).json({"error": true, "message": "Usuário não encontrado"});
  return res.status(200).json(user);
});

app.put('/user/:id', validateUser(schemas.users), async (req, res) => {
  const {id} = req.params;
  const {firstName, lastName, email, password} = req.body;
  const user = await User.updateUser(id, firstName, lastName, email, password);
  console.log(user);
  if (!user.length) return res.status(404).json({"error": true, "message": "Usuário não encontrado"});
  return res.status(200).json(user);
});

app.post('/user', validateUser(schemas.users), async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  const newUSer = await User.createUser(firstName, lastName, email, password);
  return res.status(201).json(newUSer);
});

app.listen(3000, () => {
	console.log(`Ouvindo a porta 3000`);
});
