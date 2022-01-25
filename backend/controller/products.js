const express = require('express');
const productsRepository = require('../repository/products.repository');
const app = express();

app.get('/api', async(req, res) =>{
  const product = await productsRepository.getAll();
});
module.exports = app;
