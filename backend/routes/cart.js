const express = require('express')
const controller = require('../controller/cart')
const router = express.Router()
router.get('/api/', controller.getAllProducts)
router.post('/api/', controller.addProduct)
module.exports = router