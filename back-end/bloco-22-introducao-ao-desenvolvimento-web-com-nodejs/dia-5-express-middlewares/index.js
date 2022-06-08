const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const salesRouter = require('./salesRouter');
const authorizationRouter =require('./authorizationRouter');
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use('/sales', salesRouter);
app.use('/signup', authorizationRouter);

app.listen(3001, () => { console.log('Ouvindo sales na porta 3001'); });