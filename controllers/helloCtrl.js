let fn_hello_a = async (ctx, next) => {
    let name = ctx.params.name;
    ctx.throw('wrong')
    ctx.response.body = `<h1>Hello, A!</h1>`;
};

let fn_hello_b = async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>Hello, B!</h1>`;
};
let fn_hello = async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};


module.exports = [{
        method: 'get',
        path: '/hello/a',
        handle: fn_hello_a,
    },
    {
        method: 'get',
        path: '/hello/b',
        handle: fn_hello_b,
    },
    {
        method: 'get',
        path: '/hello/:name',
        handle: fn_hello,
    },
    {
        method: 'get',
        path: '/hello/:name',
        handle: fn_hello,
    },
];