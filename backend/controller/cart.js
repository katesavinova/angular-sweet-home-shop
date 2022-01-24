const path = require('path');
const {readJsonFile, writeJsonFile} = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), 'cart.json');
module.exports.getAllProducts = async(res,req) =>{
  //ответ отдает полное содержимое корзинки
  //получив готовый список, замещаем его у себя в сервисе
  return await readJsonFile(FILE_PATH) || [];
}

module.exports.addProduct = async(product) =>{
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

