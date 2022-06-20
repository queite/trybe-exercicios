const Cep = require('../models/Cep');

const findByCep = async (cep) => {
  if (!/\d{5}-?\d{3}/.test(cep)) return { "error":
    { "code": "invalidData", "message": "CEP inválido" }
  };

  const cepNumbers = cep.replace('-', '');
  const adress = await Cep.getCEP(cepNumbers);

  if (!adress) return { "error": { "code": "notFound", "message": "CEP não encontrado" } };
  return adress;
}

module.exports = {
  findByCep,
}