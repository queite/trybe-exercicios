const { it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Teste função soma', () => {
  it('verifica se a soma de (4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('verifica se o retorno de (0, 0) é 0', () =>{
    expect(sum(0, 0)).toBe(0);
  })
  it('testa se a função sum lança erro quando os parêmetros são 4 e "5"', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })
  it ('testa se a msg de erro é "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError(/^parameters must be numbers$/);
  })
})