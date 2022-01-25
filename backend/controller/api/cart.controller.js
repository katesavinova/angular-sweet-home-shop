const { Router } = require('express');
const productsRepository = require('../../repository/products.repository');
const router = new Router();

router.get('/', async (req, res) => {
    const products = await productsRepository.getAll();
    res.json(products);
});

router.post('/', async (req, res) => {
    await productsRepository.add(req.body);
    res
    .status(201)
    .json(product);
});

module.exports = router;
