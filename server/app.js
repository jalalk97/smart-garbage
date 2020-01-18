const fs = require('fs')
const express = require('express')
const app = express()

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);

app.get('/', (req, res) => {
  res.json({'hello': 'world'})
})

app.get('/jalal', (req, res) => {
  res.json({'hello': 'jalal'})
})

const WATCH_FILE_PATH = 'a.txt'

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

fs.watch(WATCH_FILE_PATH, {}, (...a) => {
  console.log(52634)
})
