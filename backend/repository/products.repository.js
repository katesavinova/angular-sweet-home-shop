const path = require('path');
const { readJsonFile} = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename),  'data', 'products.json');
const productsRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    }
};

module.exports = productsRepository;
