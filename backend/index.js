const express = require('express');
const controllers = require('./controller');
const app = express();
const port = 3000;
app.use(controllers);
// const cartRouter = require('./routes/cart');
// const productsRouter = require('./routes/products');

// app.use('/api/cart', cartRouter);
// app.use('/api/products', productsRouter);
// app.get('/api/cart',((req, res) =>{
//   const products = []
//   res.send(products)
// }))
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
module.exports = app;
