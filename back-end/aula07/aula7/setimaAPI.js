// importando a biblioteca do express

var express = require('express')

// importando a biblioteca do body parser
var bodyParser = require('body-parser')

// objeto global que representa a aplicacao

var app = express()

//  aqui eh necessario que o conteudo a ser enviado
// dentro de uma chamada POST
// seja codificada (encodada - encodificada)

// o false no parametro significa que vai usar
// biblioteca interna query

var urlEncodedParser = bodyParser.urlencoded({ extended: false })
// vamo expor uma rotinha POST

// o legal eh que nao precisa enfiar if else
// basta ir fazendo as ROTA
app.post('/programaromba', urlEncodedParser, function (req, res) {
  console.log(req.body.nome + ' ' + req.body.sobrenome)

  res.end(JSON.stringify('OK'))
})

app.post('/programalocao', urlEncodedParser, function (req, res) {
  console.log(req.body.nome + ' ' + req.body.sobrenome)

  res.end(JSON.stringify('Locao'))
})

//defino aqui a porta que vai escutar as requisicoes
app.listen(3000)
