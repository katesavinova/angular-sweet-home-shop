const { Router } = require('express');
const productsRepository = require('../../repository/products.repository');

const router = new Router();

router.get('/api/', async (req, res) => {
    const products = await productsRepository.getAll();
    res.json(products);
});
router.post('/api/', async (req, res) => {
<<<<<<< HEAD
  const product = await productsRepository.add(req.body);
=======
const product = await productsRepository.add(req.body);
>>>>>>> 7883dfa59d71fd262ebee411125cb5b2a0ddd57a
  res
      .status(201)
      .json(product);
});
module.exports = router;
