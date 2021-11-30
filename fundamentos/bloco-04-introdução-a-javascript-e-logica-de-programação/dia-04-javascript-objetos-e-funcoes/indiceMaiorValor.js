function indiceMaiorValor (array) {
  let maior = 0;
  for (item in array) {
    if (array[maior] < array[item]) {
      maior = item;
    }
  }
  console.log(maior);
}

indiceMaiorValor([2, 3, 6, 7, 10, 1])