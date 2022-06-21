const connection = require('./connection');

const getIdFromDistrict = async (bairro, localidade, uf) => {
  const selectQuery = 'SELECT id FROM bairros WHERE bairro = ?';
  const insertQuery = 'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?)';

  const districtId = await connection.execute(selectQuery, [bairro]); // busca pelo bairro no banco de dados

  if (districtId[0].length === 0) { // caso bairro não encontrado cadastra e retorna o id
    await connection.execute(insertQuery, [bairro, localidade, uf]);
    const newDistrictId = await connection.execute(selectQuery, [bairro]);
    return newDistrictId[0][0].id
  }
  return districtId[0][0].id; // retorna id se bairro estiver cadastrado
}

module.exports = {
  getIdFromDistrict,
}