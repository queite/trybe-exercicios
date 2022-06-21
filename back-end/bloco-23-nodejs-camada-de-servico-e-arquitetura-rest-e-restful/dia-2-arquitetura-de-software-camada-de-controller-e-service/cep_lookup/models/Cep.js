const connection = require('./connection');
const District = require('./District');

const getCEP = async (cepToFind) => {
  const address = await connection.execute(
    `SELECT c.cep, c.logradouro, b.bairro, b.localidade, b.uf FROM ceps AS c
    JOIN bairros AS b
    ON c.bairro_id = b.id
    WHERE cep = ?;`, [cepToFind]);
  if (!address[0].length) return null;

  // Esta parte retorna as informaççoes no formato desejado
  const {cep, logradouro, bairro, localidade, uf} = address[0][0];
  const treatedCep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return {cep:treatedCep, logradouro, bairro, localidade, uf};
};

const insertAdress = async (rawCep, logradouro, bairro, localidade, uf) => {
  const cep = rawCep.replace(/-/ig, '');

  const districtId = await District.getIdFromDistrict(bairro, localidade, uf); // Retorna Id do bairro
  const existingCep = await getCEP(cep); // Verifica se o CEP já está cadastrado no banco
  if (existingCep === null) { // Se não estiver cadastra
    console.log('entrou no if do existingCep ')
    await connection.execute(
      `INSERT INTO ceps (cep, logradouro, bairro_id)
      VALUES (?, ?, ?)`,
      [cep, logradouro, districtId]);
  }

  return {cep:rawCep, logradouro, bairro, localidade, uf};
}

module.exports = {
  getCEP,
  insertAdress,
}