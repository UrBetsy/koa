const koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new koa();

const staticPath = './static'

app.use(static(path.join(__dirname, staticPath)))

app.listen(3001, () => {
    console.log('serve is running in port 3001')
})