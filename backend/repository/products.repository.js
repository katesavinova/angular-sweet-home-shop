const path = require('path');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'products.json');
const FILE_PATH_CART = path.resolve(path.dirname(require.main.filename), '..', 'data', 'cart.json');
const productsRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },
    async add(product){
        //добавление записи
        const productsForCart = [];
        const newProduct = {
            ...product
        };
        productsForCart.push(newProduct);

        await writeJsonFile(FILE_PATH, productsForCart);

        return newUser;
    }
};

module.exports = productsRepository;
