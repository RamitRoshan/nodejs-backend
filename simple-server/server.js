const http = require('http');
const port = 3000;
const server = http.createServer((request, response) => {  
    //requestListener - this fn only gets called, whenever a request is made to the server

    if(request.url == '/'){ //home
        response.end('Welcome to the website');

    } else if(request.url == '/about'){
        //help to print in the UI
        response.end('Bangalore based company');

    } else if(request.url == '/contact'){
        response.end('Email: company@gmail.com');

    } else if(request.url == '/users'){
        const users = [
            { id: 1, name: 'ramit'},
            { id: 2, name: 'roshan'}
        ];
        //convert objects to string (JSON.stringify)
        //hyper text transfer protocol (http)
        response.end(JSON.stringify(users));
    } else{
        response.end('page not found');
    }
});

// .listen is the method to run the server
//server.listen is a methods which take 2 argument port and callback fn
server.listen(port, () => {
    console.log('Server running on port' + port);
});


/*
Notes:
- Line with http.createServer((request, response) => { ... }) → defines the request listener.

- Everything inside that arrow function is what gets executed when a client (like a browser or Postman) sends an HTTP request.
*/


 