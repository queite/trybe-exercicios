const express = require('express');
const read = require('./fs').read;
const bodyParser = require('body-parser');
const write = require('./fs').write;

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async function (req, res) {
  try {
    const simpsons = await read();
    return res.status(200).json(simpsons);
  } catch (err) {
    console.log(err);
  }
});

app.get('/simpsons/:id', async function (req, res) {
  const {id} = req.params;
  const simpsons = await read();
  const simpson = simpsons.find((simp) => Number(simp.id) === Number(id));
  if(!simpson) return res.status(200).json(simpson);
  return res.status(404).json({ message: 'simpson not found' });
})

app.post('/simpsons', async function (req, res) {
  const {id, name} = req.body;
  const simpsons = await read();
  const simpson = simpsons.find((simp) => Number(simp.id) === Number(id));
  if (simpson) return res.status(409).json({ message: 'id already exists' });
  const newSimpson = {id, name}
  const newSimpsons = [...simpsons, newSimpson]
  write(newSimpsons);
  return res.status(204).end();
})

app.listen(3000, () => {
  console.log('Ouvindo simpsons na porta 3000');
});