const { Router } = require('express');
const productsRepository = require('../../repository/products.repository');

const router = new Router();

router.get('/', async (req, res) => {
    const products = await productsRepository.getAll();
    res.json(products);
});

module.exports = router;
