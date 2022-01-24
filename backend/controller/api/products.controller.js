const { Router } = require('express');
const usersRepository = require('../../repository/users.repository');

const router = new Router();

router.get('/api/', async (req, res) => {
    const products = await productsRepository.getAll();
    res.json(products);
});
module.exports = router;
