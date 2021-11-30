let n = 5;
let linha = '';

for (let i = 1; i <= n; i += 1) {
    for (let j = n - i; j > 0; j -= 1) {
        linha += ' ';
    }
    for ( let k = i; k > 0; k -= 1) {
        linha += '*';
    }
    console.log(linha);
    linha = '';
}