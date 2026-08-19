/* Fatec 217 - Aula 19/08/2026 - 3 Sem - DSM
Nome: Guilherme Marinho - guilherme.pozati@gmail.com
Descricao primeiro programa de node.js ocm webserver (sem framework).
Objetivo ter o primeiro contato com node.js e webserver.
Versao 02: Implementando callback no webserver.
Nela foi facilitada  a manutenção do codigo com a criação do callback tornando o bloco
do servidor desconectado do codigo

*/
// Carregar os modulos
const http = require('http');

//Funcao Callback para utilizar nos server http:
var callback = function(request,response){
    // Aqui vai toda logica
    response.writeHead(200, {"Content-type":"text/plain"});
    response.end("Deixa o chefe balançar");    
}




// Criação e configuração um Servidor http:    
// server = variavel que contem o livro e o capitulo
var server = http.createServer(callback)
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000/");

