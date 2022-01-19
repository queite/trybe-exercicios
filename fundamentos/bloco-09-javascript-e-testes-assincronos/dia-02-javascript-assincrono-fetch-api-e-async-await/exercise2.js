const apiUrl = 'https://api.coincap.io/v2/assets';
const ul = document.getElementById('coins');
const rateUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

// Retorna array de cripto moedas (API CoinCap)
const fetchCoin = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const coins = fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => data.data)
  .catch((error) => error.toString());

  return coins
};

// Retorna objeto com taxas de câmbio (currency-api)
const fecthRates = async () => { // async/await usado diretamente no fetch, mas teve que ser usado novamente lá embaixo. Por quê?
  const rates = await fetch(rateUrl)
  .then(response => response.json())
  .then(data => data.usd)
  .catch(error => error.toString);

  return rates;
};

// Joga os dados para html 
const setCoins = async () => { // async/await foi usado aqui no lugar da função do fetch
  const coins = await fetchCoin();
  const rates = await fecthRates(); // se colocar essa linha fora ou sem o awayt retorna undefined. Por quê?
  
  coins.filter((item, index) => index < 10).forEach((coin) => {
    const usd = Number(coin.priceUsd);
    const brl = (usd * rates.brl).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const li = document.createElement('li');
    li.innerHTML = `${coin.name} (${coin.symbol}): ${brl}`;
    ul.appendChild(li);
    console.log(usd, brl);
  });
};

// Formatação em moeda: https://www.blogson.com.br/formatar-moeda-dinheiro-com-javascript-do-jeito-facil/#:~:text=formatando%20Moeda%2C%20Dinheiro%20usando%20toLocaleString,fun%C3%A7%C3%A3o%20nativa%20do%20pr%C3%B3prio%20JavaScript.

window.onload = () => setCoins();
