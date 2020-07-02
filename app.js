const koa = require('koa')
const app = new koa();
const router = require('./middleware/router')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
   .use( async (ctx) => {
    if (ctx.url === '/' && ctx.method == 'GET') {
        // 当get请求的时候先返回表单
        let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
        </form>
        `
        ctx.body = html
    } else if (ctx.url == '/' && ctx.method === 'POST') {
        // 当post请求的时候
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3001, () => {
    console.log('serve is running in port 3001')
})