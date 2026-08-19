/* Fatec 217 - Aula 19/08/2026 - 3 Sem - DSM
Nome: Guilherme Marinho - guilherme.pozati@gmail.com
Descricao primeiro programa de node.js ocm webserver (sem framework).
Objetivo ter o primeiro contato com node.js e webserver.
Versao 04: Abrir arquivos no end point.
Nela foi adicionado:
modulo url que trabalha com todos os recurso de url, inclusive end points (rotas).
adicionado os end points e tratamento de erro em caso de nao porta

*/
// Carregar os modulos


const url = require('url');
const http = require('http');
const fs = require('fs');

//Funcao para ler arquivo e enviar no http:
function readFile(response,file){
    //Faz a leitura do arquivo de forma assincrona:
    fs.readFile(arquivo, function(err, data){
        //Apos ler, escrever na response (http) o conteudo do arquivo:
        response.end(data);
    })
}

//Funcao Callback para utilizar nos server http:
var callback = function(request,response){
    // Aqui vai toda logica

    // Define o cabecalho (header) com os status e tipo de resposta:
    

    // Faz o parse da URL, separando o caminho (end-points):
    var parts = url.parse(request.url);

    // Verifica o end-points:
    /* TEM NO SLIDE
    para endereçar um arquivo html usa-se "content-type":"text.html" apos o 
    para imagem "image/<tipo imagem jpeg, png...>"
    para pdf "application.pdf"
    */
    if(parts.path == "/"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'index.html')
    }

    else if(parts.path == "/rota1"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'rota1.html')
    }

    else if(parts.path == "/rota2"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'rota2.html')
    }
    // Adição de imagem
    else if(parts.path == '/imagem/recoleta'){
            response.writeHead(200, {"Content-type":"image/png"});

        readFile(response, 'recoleta.png')
    }

    else{
       response.writeHead(200, {"Content-type":"text/html"});
       readFile(response, 'erro404.html') 
        }
        
}




// Criação e configuração um Servidor http:    
// server = variavel que contem o livro e o capitulo
var server = http.createServer(callback)
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000/");

