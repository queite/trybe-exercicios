const fs = require('fs').promises;

async function replaceCaharacter() {
  const originFile = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(originFile);
  const character = data.filter((item) => item.id === '5');
  const destineFile = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const destineData = JSON.parse(destineFile);
  const index = destineData.findIndex((character) => character.id === '8');
  destineData.splice(index, 1, character);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(destineData));
}

replaceCaharacter();