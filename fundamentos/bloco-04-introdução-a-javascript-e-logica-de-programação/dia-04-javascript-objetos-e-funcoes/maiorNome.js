function maiorNome(nomes) {
  let indice = 0;
  for (item in nomes) {
    if (nomes[item].length > nomes[indice].length) {
      indice = [item];
    }
  }
  console.log(nomes[indice])
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);