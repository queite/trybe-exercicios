const fs = require('fs');

function writeFile(nome, conteudo) {
  try {
    fs.writeFileSync(`./${nome}`, `${conteudo}`);
    return 'ok';
  } catch(err) {
    return err
  }
}

module.exports = writeFile;
