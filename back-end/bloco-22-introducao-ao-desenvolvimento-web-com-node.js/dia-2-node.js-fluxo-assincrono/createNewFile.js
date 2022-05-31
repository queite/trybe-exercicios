const fs = require('fs').promises;

async function createNewFile() {
  const simpsonFamilyID = ['1', '2', '3', '4']
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(file);
  const simpsonFamily = data.filter((item) => simpsonFamilyID.includes(item.id));
  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
}

createNewFile();