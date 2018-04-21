var http = require('http');
var module1 = require('./module1');

function onRequest(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World!');
    response.write(module1.myString);
    response.end();
}

http.createServer(onRequest).listen(8080);
console.log("run on localhost:8080");