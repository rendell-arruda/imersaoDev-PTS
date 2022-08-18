// nossa primeira API
// vamos usar um modulo interno do Node js chamado http

// em JS, em node.js, require significa que esta requerendo/importando o modulo

var http = require('http')

// nesse momento ja temos modulo, e devemos simular um servidor para receber e mandar uma requisicao http

//funcao para representar um servidor
//requisicao e resposta
function server(request, response) {
  //resposta com status 200 é pq deu bao
  response.writeHead(200, { 'Content-Type': 'application/json' })
  //escreve na resposta
  response.write('Imersão dev')
  //fecha a resposta
  response.end()
}
//vou criar um servidor passando como parametro a funcao q criei acima
//servidor precisa escutar uma porta tcp/ip
http.createServer(server).listen(9000)
