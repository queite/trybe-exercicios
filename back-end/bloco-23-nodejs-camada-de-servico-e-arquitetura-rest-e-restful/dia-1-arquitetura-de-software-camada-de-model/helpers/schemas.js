const Joi = require('joi');

const schemas = {
  users: Joi.object().keys({ 
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }) 
  // define all the other schemas below 
}; 
module.exports = schemas;

//https://softchris.github.io/pages/joi.html#building-a-middleware