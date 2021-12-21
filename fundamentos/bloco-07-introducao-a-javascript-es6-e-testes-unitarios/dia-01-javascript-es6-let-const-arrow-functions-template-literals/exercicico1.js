// function calcularFatorialRecursivamente (n) {
//   if (n === 1) {
//       return 1;
//   }
   
//   return n * calcularFatorialRecursivamente (n - 1);
// }
// calcularFatorialRecursivamente(5);  
// fonte para entender bem https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript
// Sobre recursividade https://www.youtube.com/watch?v=M7c-m2xN9FQ


const fatorial = n => (n === 1) ? 1 : n * (fatorial (n-1));
console.log(fatorial(5));