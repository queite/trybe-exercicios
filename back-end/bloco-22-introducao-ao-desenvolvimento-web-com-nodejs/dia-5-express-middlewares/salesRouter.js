const express = require('express');
const validateInfos = require('./middlewares/validateInfos');
const validateproductName = require('./middlewares/validateproductName');
const router = express.Router();

router.post('/', validateproductName, validateInfos, function (req, res) {
  const {productName, infos: {saleDate, warrantyPeriod}} = req.body;
  return console.log(productName, saleDate, warrantyPeriod)
});

// http POST :3001/sales productName=teste infos:='{"saleDate":"25/02/20", "warrantyPeriod":3}'

module.exports = router;