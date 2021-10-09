import Koa from 'koa'
import assets from 'koa-static'
import { Server } from 'socket.io'

const PORT = 3000 || process.env.PORT;

// init koa
const app = new Koa();
app.use(assets('public'));

// init server
const server = app.listen(PORT);

// init io
const io = new Server(server);

// クライアントが接続した時の処理
io.on('connection', (socket) => {
  console.log('接続しました');
  // 全ての接続しているユーザーに送信するメッセージ
  socket.emit('message','こんにちは')
  // 単一の接続しているユーザーに送信するメッセージ
  socket.broadcast.emit('message','００さんが参加しました。')
  socket.on('disconnect',() => {
    console.log('切断しました。')
  })
});
