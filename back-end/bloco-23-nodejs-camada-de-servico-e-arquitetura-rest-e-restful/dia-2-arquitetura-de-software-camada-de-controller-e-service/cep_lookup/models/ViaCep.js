const axios = require('axios').default;

const getAddresViaCep = async (cep) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
}

module.exports = {
  getAddresViaCep,
}
