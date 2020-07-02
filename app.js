const koa = require('koa')
const app = new koa();
const bodyParser = require ('koa-bodyparser')
const fs = require('fs')
app.listen(3001, () => {
    console.log('serve is running in port 3001')
})

app.use(async (ctx, next) => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
    ctx.type = 'text/html'
})

async function route (url) {
    let view = '404.html';
    switch (url) {
        case '/' :
            view = 'index.html';
            break;
        case '/index':
            view = 'index.html';
            break;
        case '/todo':
            view = 'todo.html';
            break;
        default:
            break;
    }
    let html = await render (view);
    return html;
}

function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl =  `./view/${page}`;
        fs.readFile(viewUrl, "binary", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}