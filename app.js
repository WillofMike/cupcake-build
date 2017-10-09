const express = require('express');

const app = express();

const port = 3000;

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  const post = req.body

  console.log(post);
  res.json(post)
})

app.listen(port, () => {
  console.log(`Got it connect on https://localhost:${port}`);
})
