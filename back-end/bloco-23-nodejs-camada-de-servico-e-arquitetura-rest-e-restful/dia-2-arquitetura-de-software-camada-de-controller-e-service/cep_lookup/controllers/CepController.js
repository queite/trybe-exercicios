const schemas = require('../schemas/address');
const Cep = require('../services/Cep');

const findAddressByCep = async (req, res, next) => {
  const {cep} = req.params;
  const address = await Cep.findByCep(cep);

  if (address.error) return next(address.error);

  return res.status(200).json(address);
}

const createAddress = async (req, res, next) => {
  const {cep, logradouro, bairro, localidade, uf} = req.body;
  const modifiedCep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');

  const {error} = schemas.address.validate({cep: modifiedCep, logradouro, bairro, localidade, uf});
  if (error) return next(error);

  const createdAddress = await Cep.createAddress(modifiedCep, logradouro, bairro, localidade, uf);
  console.log('createdAddress.error', createdAddress.error);
  if (createdAddress.error) return next(createdAddress.error);
  return res.status(201).json(createdAddress);
}

module.exports = {
  findAddressByCep,
  createAddress,
}