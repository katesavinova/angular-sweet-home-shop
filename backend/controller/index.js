const express = require('express');
const router = express.Router();
const cartController = require('./api/cart.controller');
const productsController = require('./products');
const apiControllers = require('./api');

router.use('/cart', cartController);
router.use('/products', productsController);
router.use('/api', apiControllers);

module.exports = router;
