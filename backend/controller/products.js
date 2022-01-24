const express = require('express');
const productsRepository = require('../repository/products.repository');
const app = express();

app.get('/api',((req, res) =>{
  const product = await productsRepository.getAll();
  res.render('/products', { product });
}))
module.express=app
