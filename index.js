const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.on("send-messege", messege => {
    io.emit('send-messege', messege);
  });
});

http.listen(3100);