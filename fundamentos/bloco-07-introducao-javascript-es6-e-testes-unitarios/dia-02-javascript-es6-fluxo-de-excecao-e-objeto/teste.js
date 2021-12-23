function objeto(obj, chave, valor) {
  obj = {};
  const key = chave;
  const value = valor;
  obj[key] = value;
  return obj;
}
objeto('carro', 'modelo', 'onix');