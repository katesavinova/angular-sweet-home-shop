const { Router } = require('express');
const usersController = require('./products.controller');

const router = new Router();

router.use('/products', productsController);

module.exports = router;
