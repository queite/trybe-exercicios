const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf8', (err) => {
    if(err) {
      console.error(`Não foi possível ler o arquivo simpsons.json. Erro: ${err}`);
      process.exit(1);
    }
    // Desta forma não usa promisse, so funciona se importar o fs sem o .promise
    // const obj = JSON.parse(data);
    // obj.forEach(element => {
    //   console.log(`${element.id} - ${element.name}`)
    // });
  })
  .then((result) => {
    const data = JSON.parse(result);
    data.forEach(element => {
      console.log(`${element.id} - ${element.name}`)
    });
  });
}

readAll();