const Cep = require('../models/Cep');

const findByCep = async (cep) => {
  if (!/\d{5}-?\d{3}/.test(cep)) return { error:
    { code: "invalidData", message: "CEP inválido" }
  };

  const cepNumbers = cep.replace('-', '');
  const adress = await Cep.getCEP(cepNumbers);

  if (!adress) return { error: { code: "notFound", message: "CEP não encontrado" } };
  return adress;
}

const createAddress = async (cep, logradouro, bairro, localidade, uf) => {
  const isCep = await Cep.getCEP(cep);
  if (!isCep) return {error: { code: "alreadyExists", message: "CEP já existente" }};

  return await Cep.insertAdress(cep, logradouro, bairro, localidade, uf);
}

module.exports = {
  findByCep,
  createAddress
}