//Que). Build an HTTP Server Using Only Node js, The server must expose routes that
//1) send a welcome message & 2) return an array of objects as JSON

const http = require('http');
const port = 3000;

const items = [
    {id:1, "name": "Alpha"},
    {id:2, "name": "Beta"},
];

const server = http.createServer((request, response) => {

    if(request.url === "/" && request.method === "GET"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Welcome to the Nodejs HTTP Server!!");

    } else if(request.url === "/items" && request.method === "GET"){
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(items));

    } else if(request.url === "/health" && request.method === "GET"){
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({status: "up"}));
    }else{
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("page not found");
    }
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
