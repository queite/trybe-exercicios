const fs = require('fs');
const { expect } = require('chai');
const writeFile = require('../writeFile');
const sinon = require('sinon');

describe('Cria um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok'); // Se tivesse algum caso que exigisse uma resposta diferente deveria ser criando outro stub com a resposta desejada no describe correspondente
  });

  after(() => {
    fs.writeFileSync.restore();  // se não restaurar todas as respostas serão ok
  });

  it('retorna "ok"', () => {
    const resposta = writeFile('arquivo.txt', 'Bamonos');
    expect(resposta).to.be.equals('ok');
  });

  it('retorna uma string', () => {
    const resposta = writeFile('arquivo.txt', 'Bamonos');
    expect(resposta).to.be.a('string');
  });
});