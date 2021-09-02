const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

// router定義
app
  .use(router.routes())
  .use(router.allowedMethods());

// ルーター定義
router.get('/',async (ctx,next) => {
  ctx.body = "first"
})

router.get('/user', async (ctx,next) => {
  ctx.body = "Hello"
})

router.get('/user/:id',async (ctx,next) => {
  ctx.body = `Hello ${ctx.params.id}`
})

app.listen(3000)
