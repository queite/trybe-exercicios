let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}

let media = soma / (numbers.length )

console.log(soma);
console.log(media);

if (media > 20) {
    console.log('Média maior que 20')
}else {
    console.log('Média menor que 20')
}

let maior = 0;
let menor = 1000;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }if (numbers[index] < menor) {
        menor = numbers[index]
    }
}
console.log('Maior: ' + maior);
console.log('Menor: ' + menor);