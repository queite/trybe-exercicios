function encode(phrase) {
  let newPhrase = [];
  for (let index in phrase.split('')) {
    if (phrase[index] === 'a') {
      newPhrase[index] = '1';
    } else if (phrase.toLowerCase()[index] === 'e') {
      newPhrase[index] = '2';
    } else if (phrase.toLowerCase()[index] === 'i') {
      newPhrase[index] = '3';
    } else if (phrase.toLowerCase()[index] === 'o') {
      newPhrase[index] = '4';
    } else if (phrase.toLowerCase()[index] === 'u') {
      newPhrase[index] = '5';
    } else {
      newPhrase[index] = phrase[index];
    }
  }
  return newPhrase.join('');
}
function decode(phrase) {
  let newPhrase = [];
  for (let index in phrase.split('')) {
    if (phrase[index] === '1') {
      newPhrase[index] = 'a';
    } else if (phrase[index] === '2') {
      newPhrase[index] = 'e';
    } else if (phrase[index] === '3') {
      newPhrase[index] = 'i';
    } else if (phrase[index] === '4') {
      newPhrase[index] = 'o';
    } else if (phrase[index] === '5') {
      newPhrase[index] = 'u';
    } else {
      newPhrase[index] = phrase[index];
    }
  }
  return newPhrase.join('');
}

const functions = {encode, decode};
module.exports = functions;

console.log(encode('Ele viu um carro'))