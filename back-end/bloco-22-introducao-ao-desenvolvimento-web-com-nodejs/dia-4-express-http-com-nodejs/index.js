const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/greetings', function (req, res) {
  const {name, age} = req.body;
  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}!`});
  return res.status(401).json({ "message": "Unauthorized" });
  //httpie =>  http :3000/greetings name=Queite age:=25
});

app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;

  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
  // httpie => http PUT :3000/users/Queite/35  
});
     

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});