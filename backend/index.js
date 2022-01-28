const express = require('express');
const controllers = require('./controller');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controllers);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
module.exports = app;
