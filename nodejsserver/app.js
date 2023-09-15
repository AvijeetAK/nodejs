const http = require('http');



const server = http.createServer((req,res) => {
    console.log("Avijeet");
});

server.listen(4000);