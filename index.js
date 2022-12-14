const http = require('http'); 
const server = http.createServer(
    function(request, response) { 
        response.writeHead(200, { "Content-Type": "text/html" }); 
        response.end("<html><body><span>SDP EPIC 4</span></body></html>"); 
    }); 
const port = process.env.PORT || 1337; 
server.listen(port); 
console.log(`Run at http://localhost:${port}`);