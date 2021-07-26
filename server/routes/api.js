//ameer branch init
const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;
console.log("hi?")

app.get('/', (req, res) => {
  res.sendFile("hi");
});


io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    console.log("in chat msg")
    io.emit('chat message', msg);
  });
  socket.on('customer', msg => {
    console.log("in customer")
    io.emit('chat message', msg);
  });


});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
