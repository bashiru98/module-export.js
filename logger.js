const EventEmitter = require('events');




var url = 'http://mylogger.oi/log/';



class Logger extends EventEmitter {
     log (message) {

        console.log(`hello ${message}`);
    
        this.emit('logging',{data:'message'}); 
    }
    

}


module.exports =Logger;


