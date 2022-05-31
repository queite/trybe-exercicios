const fs = require('fs').promises;

async function searchID(id) {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(file);
  const simpson = data.find((item) => item.id === id);
  if (!simpson) throw new Error('id não encontrado');
  console.log(`${simpson.id} - ${simpson.name}`);
}

searchID('2');