const Cep = require('../models/Cep');
const ViaCep = require('../models/ViaCep');

// Retorna endereço se há cep ou erro se não há
const findByCep = async (cepToSearch) => {
  if (!/\d{5}-?\d{3}/.test(cepToSearch)) return { error: // Valida formato CEP
    { code: "invalidData", message: "CEP inválido" }
  };
  const cepNumbers = cepToSearch.replace('-', ''); // Remove traço

  const address = await Cep.getCEP(cepNumbers); // Busca no banco de dados
  if (address) return address;

  const cepViaCep = await ViaCep.getAddresViaCep(cepNumbers);  // Busca na API se não retornar no banco de dados

  if (cepViaCep.erro) return { error: { code: "notFound", message: "CEP não encontrado" } }; // Retorna erro se não houver cep. (Objeto retornado pela API qdo não há cep: { erro: 'true' })

  const {cep, logradouro, bairro, localidade, uf} = cepViaCep;
  return Cep.insertAdress(cep, logradouro, bairro, localidade, uf); // Insere dados no banco de dados e retorna os dados - função insertAdress do model dá o retorno
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