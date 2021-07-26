//ameer branch init
const express = require('express')
const app = express();
const path = require('path')
const http = require('http').Server(app);
const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
const port = process.env.PORT || 5000;
//=================================================================
//const customerSocket = require('./socketHandlers/customerSocket')
//=================================================================
const menuAPI = require('./routes/menuAPI')
const ordersAPI = require('./routes/ordersAPI')
const QR_API = require('./routes/QR_API')
//=================================================================
//deals with json parser / extracting from body
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//=================================================================
//middleware for allow origin
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
//=================================================================
app.get('/orders', (req, res) => {
    res.send("hi");
});
//=================================================================
app.use('/Menu',menuAPI)
app.use('/Orders',ordersAPI)
app.use('/QR',QR_API)
//=================================================================
io.on('connection', (socket) => {
    console.log('new client connected');
    require('./socketHandlers/customerSocket')(socket)
    require('./socketHandlers/resturantSocket')(socket)
});
//=================================================================
//testing emiting to client

// function myFunc(arg) {
//   console.log(`arg was => ${arg}`);
//   io.emit('customer', "from server");
// }

// setTimeout(myFunc, 10000, 'funky');
//=================================================================
http.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
