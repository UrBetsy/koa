const Home = async (ctx) => {
    let html = `
        我是index
    `
    ctx.body = html;
}

const Todo = async (ctx) => {
    let html = `
        我是todo
    `
    ctx.body = html;
}

const NotFound = async (ctx) => {
    let html = `
        我是NotFound
    `
    ctx.body = html;
}

module.exports = {
    Home,
    Todo,
    NotFound,
}