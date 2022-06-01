function checkNumber(number) {
  if (typeof number !== "number") {return 'Deve ser informado um número'};
  if (number > 0) {return 'positivo'};
  if (number < 0) {return 'negativo'};
  return 'neutro';
}

module.exports = checkNumber;
