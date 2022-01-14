const express = require('express');
const app = express();
const port = 3000;
const cartRouter = require('./routes/cart')

app.use('/cart', cartRouter)
app.get('/cart',((req, res) =>{
  const products = []
  res.send(products)
}))
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
module.exports = app
