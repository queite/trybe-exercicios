const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('Quando o número for igual a 0', () => {
  it('retorna uma string', () => {
    const resposta = checkNumber(0);
    expect(resposta).to.be.a('string');
  });
  it('retorna "neutro"', () => {
    const resposta = checkNumber(0);
    expect(resposta).to.be.equals('neutro');
  });
});

describe('Quando o número for maior que 0', () => {
  it('retorna uma string', () => {
    const resposta = checkNumber(2);
    expect(resposta).to.be.a('string');
  });

  it('retorna "positivo"', () => {
    const resposta = checkNumber(2);
    expect(resposta).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que 0', () => {
  it('retorna uma string', () => {
    const resposta = checkNumber(-3);
    expect(resposta).to.be.a('string');
  });

  it('retorna "negativo"', () => {
    const resposta = checkNumber(-1);
    expect(resposta).to.be.equals('negativo');
  });
});

describe('Quando o parâmetro não for um número', () => {
  it('retorna "Deve ser informado um número"', () => {
    const resposta = checkNumber('dahh');
    expect(resposta).to.be.equals('Deve ser informado um número');
  })
})