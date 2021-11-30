function ehPalindromo(palavra) {
  const arrayReverse = palavra.split('').reverse().join('');
  if (palavra === arrayReverse) {
    return true;
  }  else {
    return false;
  }
}

console.log(ehPalindromo('arara'))

function ehPalindromo2(palavra) {
  for (caracter in palavra) {
    if (palavra[caracter] === palavra[palavra.length -1]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(ehPalindromo2('voce'));


// let pal = 'teste';
// const array = pal.split('');
// console.log(array);
// console.log(array.reverse());
// console.log (array.join(''));