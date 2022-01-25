const { Router } = require('express');
const path = require('path');
const productsRepository = require('../repository/products.repository');
const router = new Router();

router.get('/api/', async (_request, response) => {
    const products = await productsRepository.getAll();
});

router.post('/api/', async (request, response) => {
    await productsRepository.add(request.body);
});

module.exports = router;
