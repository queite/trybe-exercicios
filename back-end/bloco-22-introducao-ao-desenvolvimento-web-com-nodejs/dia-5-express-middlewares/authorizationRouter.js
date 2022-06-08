const express = require('express');
const { NextFunction } = require('express-rescue');
const generateToken = require('./helpers/token');
const validateSignup = require('./middlewares/validateSignup');

const authorizationRouter = express.Router();

authorizationRouter.post('/', validateSignup, function (req, res) {
  // const {email, password, firstName, phone} = req.body;
  const token = generateToken();
  req.headers.Authorization = token;
  return res.status(200).json({ token });
});

module.exports = authorizationRouter;