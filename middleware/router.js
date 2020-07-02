const Router = require('koa-router')
const Home = require('../controller/home')
const router = new Router();

router.get('/', Home.Home)
router.get('/index', Home.Home)
router.get('/todo', Home.Todo)
router.get('/404', Home.NotFound)

module.exports = router;