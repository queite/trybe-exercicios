const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const {encode, decode} = require('./encodedecode');

describe('Testa a função encode', () => {
  it('testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  })
  it('Testa se enconde converte a, e, i, o, u em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toEqual('12345');
  })
  it('Testa se enconde não converte consoantes;', () => {
    expect(encode('Ele veio até aqui')).toEqual('2l2 v234 1té 1q53');
  })
  it('Testa se o número de caracteres é o mesmo na entrada e saída;', () => {
    expect(encode('Ele veio até aqui')).toHaveLength(17);
  })
})

describe('Testa a função decode', () => {
  it('testa se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  })
  it('Testa se decode converte 1, 2, 3, 4 e 5 em a, e, i, o, u, respectivamente;', () => {
    expect(decode('12345')).toEqual('aeiou');
  })
  it('Testa se decode não converte consoantes;', () => {
    expect(decode('2l2 v234 1té 1q53')).toEqual('ele veio até aqui');
  })
  it('Testa se o número de caracteres é o mesmo na entrada e saída;', () => {
    expect(decode('2l2 v234 1té 1q53')).toHaveLength(17);
  })
})
