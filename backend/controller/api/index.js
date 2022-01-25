const { Router } = require('express');
const productsController = require('./products.controller');
const cartController = require('./cart.controller');
const router = new Router();

router.use('/products', productsController);
router.use('/cart', cartController);
module.exports = router;
