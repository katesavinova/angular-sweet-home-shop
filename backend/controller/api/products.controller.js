const { Router } = require('express');
const productsRepository = require('../../repository/products.repository');

const router = new Router();

router.get('/api/', async (req, res) => {
    const products = await productsRepository.getAll();
    res.json(products);
});
router.post('/api/', async (req, res) => {
const product = await productsRepository.add(req.body);
  res
      .status(201)
      .json(product);
});
module.exports = router;
