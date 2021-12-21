// const maiorPalavra = frase => {
//   const palavras = frase.split(' ');
//   let palavraMaior = palavras[0];
//   for (let i = 1; i < palavras.length; i += 1) {
//     if (palavras[i].length > palavraMaior.length) {
//       palavraMaior = palavras[i];
//     }
//   }
//   return palavraMaior;
// }
// console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Essa solução em uma linha foi do course. Parece que há duas arrow functions aninhadas.
// A segunda é a função de comparação do método sort que faz o mesmo que o for.
// b-a é em ordem descendente
// Após a seta entende-se o return que compara o tamanho das palavras antonio= 7 e foi = 3 que recebe 4 ( valor positivo) então deixa antonio na posição 0.
// Se retornar 0 não há mudança na ordem
// Se retornar um número negativo como em antonio = 7 e aconteceu = 9 recebe -2 coloca aconteceu na posição [0]
// O [0] faz retornar somente a primeira palavra da sequência.