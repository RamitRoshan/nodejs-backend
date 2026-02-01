//Que). Build an HTTP Server Using Only Node js,
// The server must expose routes that
//1) send a welcome message &
// 2) return an array of objects as JSON
 

 const http = require('http');
 const port = 6060;


 const items = [
    {"id":1, "name": "alpha"},
    {"id":2, "name": "alphak"}
 ];

 const server = http.createServer((request, response) => {

    if(request.url === "/" && request.method === "GET"){
        response.writeHead(200, {'content-type': 'text/plain'});
        response.end("Welcome to the Node.js HTTP server");

    }else if(request.url === "/items", request.method === "GET"){
        response.writeHead(200, {'content-type': "application/json"});
        response.end(JSON.stringify({status:"up"}));

    }else if(request.url === "/health" && request.method === "GET"){
        response.writeHead(200, {'content-type': "text/plain"})
        response.end(JSON.stringify({status:"up"}));

    }else{
        response.writeHead(200, {'content-type': "plain/text"});
        response.end("page not defined");
    }
 })

 //start the server
 Server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 } )
