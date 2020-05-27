const EventEmitter =require('events');


var url = 'htttp://mywebsite.io/sites';


class Movie  extends EventEmitter {

     types = {
        name1: 'fast and farious',
        name2: 'horror'

    };

    log(greet) {
        console.log(greet);
        this.emit('firstLog', {id: 126621, name:'bashiru'});
    };

    add(a,b) {
        console.log(a + b);
    };

    

}

module.exports =Movie;