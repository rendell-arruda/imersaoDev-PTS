// em javascript, em node.js
// require significa que estou RRRRRREQUERENDO / importando o modulo
var http = require('http')
var url = require('url')

// funcao pra representar o servidor
// parametros eh o que vai dentro do parentese
function server(request, response) {
  //nao queremos get dessa vez
  // pra toda requisicao get, vai tomar 404

  if (request.method === 'GET') {
    response.writeHead(404)
    response.write('nao encontrado!')
    response.end()
  }

  // vamos trabalhar com POST

  if (request.method == 'POST') {
    var body = ''

    // pegando os dados que vêm no corpo da requisicao
    request.on('data', function (data) {
      body = body + data
    })

    // trabalhando em cima do fim da requisicao
    request.on('end', function () {
      //transformando o body em json

      var post = JSON.parse(body)

      // imprimindo a requisicao
      console.log(post)

      // definindo o cabeçalho
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.write('funcionou')

      //fechando a resposta
      response.end()
    })
  }
}

// vou criar um servidor, passando como parametro a funcao q criei acima
// servidor precisa escutar (listen) uma porta tcp ip
http.createServer(server).listen(9000)
