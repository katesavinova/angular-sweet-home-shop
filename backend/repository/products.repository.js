const path = require('path');
const uuid = require('uuid');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'products.json');

const productsRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },
    async add(product){
        //добавление записи
        const products = await this.getAllProducts();

        let findIndex = products.findIndex((thing) => thing.name.toLowerCase() === product.name.toLowerCase());

        if (findIndex === -1) {
            if (product.name.trim() && product.price) {
                products.push(product);
                await writeJsonFile(FILE_PATH, products);
                return products;
            } else {
                throw new Error("Empty fields.");
            }
        }
      }
};

module.exports = productsRepository;
