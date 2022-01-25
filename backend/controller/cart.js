const { Router } = require('express');
const cartRepository = require('../repository/cart.repository');
const router = new Router();

router.get('/api/', async (request, response) => {
    await cartRepository.getAllCart();
});

router.post('/api/', async (request, response) => {
    await cartRepository.add(request.body);
});

module.exports = router;
