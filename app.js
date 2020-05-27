
const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/') {

        res.write('hi this is my first webserver');
        res.end();
    }
    
    if(req.url ==='/api/courses') 
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
});




server.listen(3000);
console.log('listening on port 3000..');