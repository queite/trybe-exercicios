const Cep = require('../services/Cep');

const findAddressByCep = async (req, res, next) => {
  const {cep} = req.params;
  const address = await Cep.findByCep(cep);

  if (address.error) return next(address.error);

  return res.status(200).json(address);
}

module.exports = {
  findAddressByCep,
}