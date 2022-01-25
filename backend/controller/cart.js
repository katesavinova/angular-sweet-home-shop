const path = require('path');
const {readJsonFile, writeJsonFile} = require('../utils/file.utils');
const router = new Router();

router.get('/api/', async (_request, response) => {
    const products = await productsRepository.getAll();
});

router.post('/api/', async (request, response) => {
    await productsRepository.add(request.body);
});

module.exports = router;
