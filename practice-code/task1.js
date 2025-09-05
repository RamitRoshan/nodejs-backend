const http = require('http');
const port = 3060;

const employees = [
  {
    id: 101,
    name: "Ananya Gupta",
    title: "Software Engineer",
    email: "ananya.gupta@techwave.com"
  },
  {
    id: 102,
    name: "Rohan Sharma",
    title: "Backend Developer",
    email: "rohan.sharma@techwave.com"
  },
  {
    id: 103,
    name: "Priya Nair",
    title: "UI/UX Designer",
    email: "priya.nair@techwave.com"
  },
  {
    id: 104,
    name: "Vikram Mehta",
    title: "DevOps Engineer",
    email: "vikram.mehta@techwave.com"
  },
  {
    id: 105,
    name: "Sneha Kulkarni",
    title: "QA Analyst",
    email: "sneha.kulkarni@techwave.com"
  } 
];

const server = http.createServer((req, res) => {
    if(req.url === "/employees" && req.method === "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(employees));
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("page not found");
    }
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})