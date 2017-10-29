const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io')

var app = express();
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})

//console.log(publicPath);
