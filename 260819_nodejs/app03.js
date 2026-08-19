/* Fatec 217 - Aula 19/08/2026 - 3 Sem - DSM
Nome: Guilherme Marinho - guilherme.pozati@gmail.com
Descricao primeiro programa de node.js ocm webserver (sem framework).
Objetivo ter o primeiro contato com node.js e webserver.
Versao 03: Criando rotas (end-point) na aplicacao.
Nela foi adicionado:
modulo url que trabalha com todos os recurso de url, inclusive end points (rotas).
adicionado os end points e tratamento de erro em caso de nao porta

*/
// Carregar os modulos

const url = require('url')
const http = require('http')
//Funcao Callback para utilizar nos server http:
var callback = function(request,response){
    // Aqui vai toda logica

    // Define o cabecalho (header) com os status e tipo de resposta:
    response.writeHead(200, {"Content-type":"text/plain"});

    // Faz o parse da URL, separando o caminho (end-points):
    var parts = url.parse(request.url);

    // Verifica o end-points:
    if(parts.path == "/"){
            response.writeHead(200, {"Content-type":"text/plain"});

        response.end("Pagina principal")
    }

    else if(parts.path == "/rota1"){
            response.writeHead(200, {"Content-type":"text/plain"});

        response.end("Pagina/rota1")
    }

    else if(parts.path == "/rota2"){
            response.writeHead(200, {"Content-type":"text/plain"});


    }

    else{
        response.writeHead(404, {"Content-type":"text/plain"})
    }
    response.end("Deixa o chefe balancar");    
}




// Criação e configuração um Servidor http:    
// server = variavel que contem o livro e o capitulo
var server = http.createServer(callback)
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000/");

