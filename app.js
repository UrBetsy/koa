const koa = require('koa')
const path = require('path')
const views = require('koa-views')

const app = new koa();
// 加载模板引擎
app.use(views(path.join(__dirname, './view'),{
    extension: 'ejs'
}))

app.use(async (ctx)=> {
    let title = 'hello'
    await ctx.render('index', {
        title,
    })
})
app.listen(3001, () => {
    console.log('serve is running in port 3001')
})