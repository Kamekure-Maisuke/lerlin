import Koa from 'koa'
import assets from 'koa-static'
import { Server } from 'socket.io'

// init koa
const app = new Koa();
app.use(assets('public'));

// init server
const server = app.listen(3000);

// init io
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect',() => {
    console.log('user disconnected')
  })
});
