/* eslint-disable complexity */
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const loginValidation = (login) => Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate(login);

const secret = process.env.SECRET;

module.exports = async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) next(error);
  const { username, password } = req.body;
  let admin = false;

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
   const err = new Error('Acesso inválido');
    next(err);
  }

  admin = username === 'admin' && password === 's3nh4S3gur4???';

  const options = {
    expiresIn: '1h',
    // algorithm: 'HS256', // vem por default
  };

  const payload = {
    username,
    admin,
  };

  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  const token = jwt.sign(payload, secret, options);
  res.status(200).json({ token });
};