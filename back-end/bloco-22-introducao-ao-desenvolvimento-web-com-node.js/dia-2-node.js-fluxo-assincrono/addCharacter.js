const fs = require('fs').promises;

async function addCharacter(id) {
  const originFile = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(originFile);
  const character = data.filter((item) => item.id === id);
  const destineFile = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const destineData = JSON.parse(destineFile);
  const newData = [...destineData, ...character];
  console.log(newData);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newData));
}

addCharacter('8');