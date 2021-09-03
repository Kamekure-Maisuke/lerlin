// reuire
import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import render from 'koa-ejs'
import fetch from 'node-fetch'

// new app
const app = new Koa();
const router = new Router();

// path
const dirname = path.dirname(new URL(import.meta.url).pathname);

// router利用
app
  .use(router.routes())
  .use(router.allowedMethods());

// view定義
render(app, {
  root: path.join(dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

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

router.get('/page',async (ctx,next) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  await ctx.render('index',{
    users
  });
})

app.listen(3000)
