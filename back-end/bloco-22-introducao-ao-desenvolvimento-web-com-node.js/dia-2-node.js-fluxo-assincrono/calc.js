function calc(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    const types = [n1, n2, n3].find((number) => typeof number !== 'number');
    if (types) reject(new Error('Informe apenas números'));
    const result =  (n1 + n2) * n3;
    if (result < 50) reject(new Error('Valor muito baixo'))
    resolve(result);
  })
}

calc(1, 10, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));