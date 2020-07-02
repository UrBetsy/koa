const koa = require('koa')
const app = new koa();
const router = require('./middleware/router')

app.use(router.routes())
app.listen(3001, () => {
    console.log('serve is running in port 3001')
})