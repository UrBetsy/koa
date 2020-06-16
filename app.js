const koa = require('koa')
const app = new koa();
const bodyParser = require ( 'koa-bodyparser ' )

app.listen(3001, () => {
    console.log('serve is running in port 3001')
})

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>hello world</h1>'
// })

let postData = ctx.request.body