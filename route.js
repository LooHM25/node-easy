var fs = require('fs')
var router = require('koa-router')()


fs.readdirSync(__dirname + '/controllers').filter( (f) => {
    return f.endsWith('.js');
}).map( (f) => {
    return require(__dirname + '/controllers/' + f)
}).forEach( (list)=>{
    list.map( (obj) => {
        router[obj.method](obj.path,obj.handle);
    });
});

exports.router = router