let n = 3;
let soma = 0;
for (let i = 1; i <= n; i += 1) {
    if (n % i == 0) {
    soma += 1;
}
}
if (soma > 2) {
    console.log ('Não é primo')
}else {
  console.log('É primo')
}