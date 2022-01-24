const { Router } = require('express');
const cartController = require('./cart');
const productsController = require('./products');
const apiControllers = require('./api');

const router = new Router();

router.use('/cart', cartController);
router.use('/products', productsController);
router.use('/api', apiControllers);

module.exports = router;
