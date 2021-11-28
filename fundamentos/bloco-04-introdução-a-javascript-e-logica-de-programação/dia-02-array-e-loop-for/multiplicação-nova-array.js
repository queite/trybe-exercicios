let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number2 = [];
let multiplicacao = 0;
for (let i = 0; i < numbers.length -1 ; i += 1) {
    multiplicacao = numbers[i] * numbers[i + 1];
    number2.push(multiplicacao);
  }
multiplicacao = numbers[numbers.length-1] * 2;
number2.push(multiplicacao);

console.log(number2);