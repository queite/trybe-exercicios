const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const salesRouter = require('./salesRouter');
app.use('/sales', salesRouter)

app.listen(3001, () => { console.log('Ouvindo sales na porta 3001'); });