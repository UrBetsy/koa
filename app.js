const koa = require('koa')
const app = new koa();
const router = require('./middleware/router')

app.use(router.routes())
.use( async(ctx) => {
    let url = ctx.request.url;
    /**
     * 从上下文的request对象中获取请求相关信息
     */
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    /**
     * 从上下文中直接获取
     */
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }

})
app.listen(3001, () => {
    console.log('serve is running in port 3001')
})