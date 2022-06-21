const Joi = require('joi');

const nomEmptyStringRequired = Joi.string().not().empty().required();

const schemas = {
  address: Joi.object().keys({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: nomEmptyStringRequired,
    bairro: nomEmptyStringRequired,
    localidade: nomEmptyStringRequired,
    uf: nomEmptyStringRequired
  })
  // define all the other schemas below
};
module.exports = schemas;

//https://softchris.github.io/pages/joi.html#building-a-middleware