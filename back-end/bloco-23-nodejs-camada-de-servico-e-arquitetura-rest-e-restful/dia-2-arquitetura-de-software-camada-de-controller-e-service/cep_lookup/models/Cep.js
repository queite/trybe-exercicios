const connection = require('./connection');

const getCEP = async (cep) => {
  const adress = await connection.execute(`SELECT * FROM cep_lookup.ceps WHERE cep = ?`, [cep]);
  if (!adress[0].length) return null;
  return adress[0];
};

const insertAdress = async (cepComplete, logradouro, bairro, localidade, uf) => {
  const cep = cepComplete.replace(/-/ig, '');
  await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`,
    [cep, logradouro, bairro, localidade, uf]);

    return {cep, logradouro, bairro, localidade, uf};
}

module.exports = {
  getCEP,
  insertAdress,
}