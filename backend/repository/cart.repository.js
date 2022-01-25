const path = require('path');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH_CART = path.resolve(path.dirname(require.main.filename),  'data', 'cart.json');
const cartRepository = {

    async getAllCart() {
      return await readJsonFile(FILE_PATH_CART) || [];
    },
    async add(product){
        //добавление записи
        const productsForCart = await this.getAllCart();
        const newProduct = {
            buy: true,
            ...product
        };
        console.log(newProduct);
        productsForCart.push(newProduct);


        await writeJsonFile(FILE_PATH_CART, productsForCart);

        return newProduct;
    }
};

module.exports = cartRepository;
