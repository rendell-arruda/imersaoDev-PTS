var express = require('express')
var app = express()

app.get('/get', function (req, res) {
  response = {
    nome: req.query.nome,
    sobrenome: req.query.sobrenome
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.listen(3000)
