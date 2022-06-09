const express = require('express');
const bodyParser = require("body-parser");
const schemas = require('./helpers/schemas');
const validateUser = require('./middlewares/validateUser');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.post('/user', validateUser(schemas.users), async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  const newUSer = await User.createUser(firstName, lastName, email, password);
  return res.status(201).json(newUSer);
});

app.listen(3000, () => {
	console.log(`Ouvindo a porta 3000`);
});
