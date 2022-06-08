const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const salesRouter = require('./salesRouter');
const authorizationRouter =require('./authorizationRouter');
const authentication = require('./middlewares/authentication');
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use('/signup', authorizationRouter);
// app.use(authentication); // todas as rotas abaixo usarão este middleware / outra forma seria passar o middleware direto na rota de /sales antes do middleware validateproductName
app.use('/sales', salesRouter);


app.listen(3001, () => { console.log('Ouvindo sales na porta 3001'); });

//http POST :3001/sales authorization:1425bb0bac3c6cbb productName=esses infos:='{"saleDate":"22/02/20", "warrantyPeriod":3}'