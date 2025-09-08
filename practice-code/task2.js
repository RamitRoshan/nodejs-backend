const http = require('http');
const port = 3050;

const employee = [
    {
        id: 101,
        name: "Sinni Kumari",
        title: "Business Development officer",
        email: "sinni.kumari@google.com"
    },
    {
        id: 102,
        name: "Priya Kumari",
        title: "UI/UX Desiner",
        email: "priya.kumari@google.com"
    },
    {
        id: 103,
        name: "Rayma Roshan",
        title: "Backend Developer",
        email: "rayma.roshan@google.com"
    },
    {
        id: 104,
        name: "Ramit Roshan",
        title: "Full Stack Developer",
        email: "ramit.roshan@google.com"
    }
    
];

const server = http.createServer((req, res) => {

    if(req.url === "/employee" && req.method === "GET"){
        res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
        res.end(JSON.stringify(employee));
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("page not found");
    }
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});