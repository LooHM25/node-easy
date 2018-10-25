var koa = require('koa')
var app = new koa()
var router = require('./route').router
const config = require('./configs/config').config

//error handler middleware
const errHandler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type = 'html';
        ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
        ctx.app.emit('error', err, ctx);
    }
};

app.use(errHandler)

//add router middleware
app.use(router.routes())
app.use(router.allowedMethods());

//start the server
app.listen(config.port, () => {
    console.log(`The server is started at port ${config.port} ...\n`)
})