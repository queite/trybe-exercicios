const express = require('express');
const validateInfos = require('./middlewares/validateInfos');
const validateproductName = require('./middlewares/validateproductName');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validatewarrantyPeriod = require('./middlewares/validatewarrantyPeriod');

const routerSales = express.Router();

routerSales.post('/', validateproductName, validateInfos, validateSaleDate, validatewarrantyPeriod,
   function (req, res) {
    const {productName, infos: {saleDate, warrantyPeriod}} = req.body;
    return res.status(201).json({ "message": "Venda cadastrada com sucesso" })
  }
);

// http POST :3001/sales productName=teste infos:='{"saleDate":"25/02/20", "warrantyPeriod":3}'

module.exports = routerSales;