const fs = require('fs').promises;

async function deleteID() {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(file);
  const newData = data.filter((item) => item.id !== '6' && item.id !== '10');
  fs.writeFile('./simpsons.json', JSON.stringify(newData));
}

deleteID();