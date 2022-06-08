const express = require('express');
const generateToken = require('./helpers/token');
const validateSignup = require('./middlewares/validateSignup');

const authorizationRouter = express.Router();

authorizationRouter.post('/', validateSignup, function (req, res, next) {
  // const {email, password, firstName, phone} = req.body;
  const token = generateToken();
  // req.headers.authorization = token; Essa parte para passar o token para o middleqare authentication não funciona
  // next();
  return res.status(200).json({ token });
});

module.exports = authorizationRouter;