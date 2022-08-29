// NOSSA PRIMEIRA API
// vamos usar um modulo interno do Nodejs chamado http

// em javascript, em node.js
// require significa que estou RRRRRREQUERENDO / importando o modulo
var http = require('http')

// nesse momento ja temos o modulo
// vamos agora simular um servidor

// funcao pra representar o servidor
// parametros eh o que vai dentro do parentese
function server(request, response) {
  if (request.method === 'GET') {
    if (request.url === '/imersaodev') {
      // resposta com status 200 deu bao - requisicao deu bao, fez tudo certin
      response.writeHead(200, { 'Content-Type': 'application/json' })
      // conteudo da resposta
      response.write('Imersao dev')
      // fechando a resposta
      response.end()

      //se a url for imersao2
    } else if (request.url === '/imersao2') {
      // resposta com status 200 deu bao - requisicao deu bao, fez tudo certin
      response.writeHead(200, { 'Content-Type': 'application/json' })

      // conteudo da resposta
      response.write('Imersao 2')

      // fechando a resposta
      response.end()
    } else {
      response.writeHead(404)
      response.write('nao encontrado!')
      response.end()
    }

    //post para gravar/enviar dados
  } else if (request.method === 'POST') {
    response.writeHead(200, { 'Content-Type': 'application/json' })

    // conteudo da resposta
    response.write('VOCE ENVIOU UM POST AQUI')

    // fechando a resposta
    response.end()
  }
}

// vou criar um servidor, passando como parametro a funcao q criei acima
// servidor precisa escutar (listen) uma porta tcp ip
http.createServer(server).listen(9000)
