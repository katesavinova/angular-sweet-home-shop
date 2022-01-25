const { Router } = require('express');
const cartRepository = require('../../repository/cart.repository');
const router = new Router();

router.get('/', async (req, res) => {
    const products = await cartRepository.getAllCart();
    res.json(products);
});

router.post('/', async (req, res) => {
  const product = await cartRepository.add(req.body);
    res
    .status(201)
    .json(product);
});

module.exports = router;
