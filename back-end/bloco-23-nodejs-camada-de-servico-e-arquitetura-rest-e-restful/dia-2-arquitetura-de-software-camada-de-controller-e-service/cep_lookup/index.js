require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const Cep = require('./controllers/CepController');
const error = require('./middlewares/error');

app.get('/ping', (_req, res) => {
  return res.status(200).json({"message": "pong!"})
});

app.get('/cep/:cep', Cep.findAddressByCep);

app.post('/cep', Cep.createAddress);

app.use(error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo cep_lookup`));