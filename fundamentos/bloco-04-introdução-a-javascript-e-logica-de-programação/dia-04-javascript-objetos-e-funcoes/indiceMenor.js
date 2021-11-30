function indiceMenor(array) {
  let menor = 0;
  for (item in array) {
    if (array[menor] > array[item]) {
      menor = item;
    }
  }
  console.log(menor);
}

indiceMenor([2, 4, 6, 7, 10, 0, -3]);