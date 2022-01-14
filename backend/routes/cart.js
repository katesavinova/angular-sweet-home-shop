const express = require('express')
const controller = require('../controller/cart')
const router = express.Router()
router.get('/', controller.getAllProducts)
router.post('/', controller.addProduct)
module.exports = router
