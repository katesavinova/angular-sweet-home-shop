const express = require('express');
const app = express();
const port = 3000;
app.get('/products',((req, res) =>{
  const products = [
    {
      "id": 1,
      "src": "https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png",
      "name": "Чайник классический",
      "price": "2999₽",
    },
    {
      "id": 2,
      "src": "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png",
      "name": "Лампа настольная",
      "price": "7799₽",
    },
    {
      "id": 3,
      "src": "https://cdn.pixabay.com/photo/2020/06/17/12/59/vase-5309392_1280.png",
      "name": "Ваза",
      "price": "4699₽",
    },
    {
      "id": 4,
      "src": "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604_1280.png",
      "name": "Торшер",
      "price": "1599₽",
    },
    {
      "id": 5,
      "src": "https://cdn.pixabay.com/photo/2017/09/26/21/28/folding-chair-2790167_1280.png",
      "name": "Табурет",
      "price": "8799₽",
    },
    {
      "id": 6,
      "src": "https://cdn.pixabay.com/photo/2017/01/18/15/27/milk-can-1990081_1280.png",
      "name": "Банка декоративная",
      "price": "1399₽",
    },
    {
      "id": 7,
      "src": "https://cdn.pixabay.com/photo/2017/07/24/23/58/chest-2536477_1280.png",
      "name": "Шкатулка",
      "price": "2099₽",
    },
    {
      "id": 8,
      "src": "https://cdn.pixabay.com/photo/2019/10/19/17/20/daybed-4561819_1280.png",
      "name": "Балдахин",
      "price": "12999₽",
    },
  ]

  res.send(products)
}))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
