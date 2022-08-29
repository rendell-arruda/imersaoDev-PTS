// em javascript, em node.js
// require significa que estou RRRRRREQUERENDO / importando o modulo
var http = require('http')
// modulo inbuit do node
//responsavel por fazer as tratativas de quebrar a url em pedacos menores conforme nossa necessidade de dado
var url = require('url')

// nesse momento ja temos o modulo
// vamos agora simular um servidor

// funcao pra representar o servidor
// parametros eh o que vai dentro do parentese
function server(request, response) {
  if (request.method === 'GET') {
    // pegando as partes da URL
    //o primeiro parametro request.url é a url completa
    //o segundo parametro é para indicar que vou precisar da query/parametros de pesquisa depois do ponto de '?'
    var parts = url.parse(request.url, true)

    // comparando o pathname é o caminho de contexto
    if (parts.pathname === '/imersaodev') {
      //query é o que vai pegar os de parametro de 'pesquisa'
      var query = parts.query

      // definimos um parametro de pesquis chamado param1
      // vamos imprimi-lo no console, que é o terminal 'preto' que roda do lado do servidor
      console.log(query.nome)

      // pode ser tambem
      console.log(query.nome)

      // resposta com status 200 deu bao - requisicao deu bao, fez tudo certin
      response.writeHead(200, { 'Content-Type': 'application/json' })

      // conteudo da resposta
      response.write(query.nome + ' ' + query.idade)

      // fechando a resposta
      response.end()
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
  } else if (request.method === 'POST') {
    response.writeHead(200, { 'Content-Type': 'application/json' })

    // conteudo da resposta
    response.write('POST AQUI')

    // fechando a resposta
    response.end()
  }
}

// vou criar um servidor, passando como parametro a funcao q criei acima
// servidor precisa escutar (listen) uma porta tcp ip
http.createServer(server).listen(9000)
