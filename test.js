
const http =require('http');

const server = http.createServer(function(req, res) {
     if (req.url === '/') {


         res.write('this is my first backend server'); 
         res.end();
     } 

     if (req.url === '/api/lessons/id') {
         res.write(JSON.stringify([{name1:'bashiru', name2:'peter', name3:'Sadia' }]))
         res.end();
     };
     if (req.url === '/api/lessons/id/1') {
        res.write(JSON.stringify('Bashiru'))
        res.end();
    };
    if (req.url === '/api/lessons/id/2') {
        res.write(JSON.stringify('Rashid'))
        res.end();
    };
    if (req.url === '/api/lessons/id/3') {
        res.write(JSON.stringify('peter'))
        res.end();
    };
    if (req.url === '/api/lessons/id/4') {
        res.write(JSON.stringify('Amadu'))
        res.end();
    };

    if (req.url === '/api/lessons/id/5') {
        res.write(JSON.stringify('Bukari'))
        res.end();
    };
    if (req.url === '/api/lessons/id/6') {
        res.write(JSON.stringify('Hamdia'))
        res.end();
    };
    if (req.url === '/api/lessons/id/7') {
        res.write(JSON.stringify([{name: 'bashiru', age: 24, Tribe: 'Kusasi', Address:'csdhc242huihihf'}]))
        res.end();
    };

});




server.listen(9000);
console.log('listening on port 9000...');