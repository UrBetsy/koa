const Home = async (ctx, next) => {
    let html = `
        我是index
    `
    ctx.body = html;
    next()
}

const Todo = async (ctx, next) => {
    let html = `
        我是todo
    `
    ctx.body = html;
    next()
}

const NotFound = async (ctx, next) => {
    let html = `
        我是NotFound
    `
    ctx.body = html;
    next()
}

module.exports = {
    Home,
    Todo,
    NotFound,
}