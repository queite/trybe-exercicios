const { expect, it } = require('@jest/globals')
const searchEmployee = require('./bonus.js')

describe('Teste da função searchEmployee', () => {
  it('Testa se a função searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toEqual('function');
  })
  it('Testa se o retorno é o esperado', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual({ id: '9852-2-2', specialities: [ 'Ruby', 'SQL' ]})
  })
  it('Testa lançamento de erro quando ID não é encontrado', () => {
    expect(() => {searchEmployee('9852-2-3', 'specialities')}).toThrow(new Error('ID não identificada'));
  })
  it('Testa lançamento de erro quando a chave não é encontrada', () => {
    expect(() => {searchEmployee('9852-2-2', 'function')}).toThrowError(new Error ('Informação indisponível'));
  })
})