const apiUrl = 'https://api.coincap.io/v2/assets';
const ul = document.getElementById('coins');

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

const setCoins = async () => {
  const coins = await fetchCoin();

  coins.filter((item, index) => index < 10).forEach((coin) => {
    const li = document.createElement('li');
    li.innerHTML = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
    ul.appendChild(li);
  });
}

window.onload = () => setCoins();
