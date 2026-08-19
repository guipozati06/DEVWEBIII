/* Fatec 217 - Aula 19/08/2026 - 3 Sem - DSM
Nome: Guilherme Marinho - guilherme.pozati@gmail.com
Descricao primeiro programa de node.js ocm webserver (sem framework).
Objetivo ter o primeiro contato com node.js e webserver.
Versao 01: Sem chamada sincronizada
Para executar a aplicação devemos entrar no cmd -> entrar no dir -> executar: node app01.js
Manter a aplicação em execução no cmd e no navegador acessar atraves do caminho
em caso de mudança no codigo deve-se executar o servidor novamente
*/
// Carregar os modulos
const http = require('http');

// Criar um Servidor http:

var server = http.createServer(
    function(request, response){
        // Aqui vai toda logica
        response.writeHead(200, {"Content-type":"text/plain"});
        response.end("Deixa o chefe balançar");

    }
);


// Config do Servidor:
    // server = variavel que contem o livro e o capitulo
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000/");