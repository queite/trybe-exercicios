const randomNumber = () => Math.floor(Math.random() * 101);

const stringToUpperCase = (string) => string.toUpperCase();

const firsLetter = (string) => string[0];

const concat = (string1, string2) => string1.concat(string2);

const fetchDog = async () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => response.ok ? Promisse.resolve(data) : Promise.reject(data))  // response.ok https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
}


// const fetchDog = async () => {
//   const URL = 'https://dog.ceo/api/breeds/image/random';
//   const response = await fetch(URL);
//   const object = await response.json();
//   return object;
// }

module.exports = { randomNumber, stringToUpperCase, firsLetter, concat, fetchDog };
