const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/greetings', function (req, res) {
  const {name, age} = req.body;
  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}!`});
  return res.status(401).json({ "message": "Unauthorized" });
});



app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});