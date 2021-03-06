
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
const foodOrderAPI = require('./routes/foodOrdersAPI')
const WaiterOrderAPI = require('./routes/WaiterOrderAPI')
const Testing_API = require('./routes/TestingAPI')
//=================================================================
//deals with json parser / extracting from body
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
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
app.use('/Menu', menuAPI)
app.use('/Orders', ordersAPI)
app.use('/QR', QR_API)
app.use('/FoodOrder', foodOrderAPI)
app.use('/WaiterOrder', WaiterOrderAPI)
app.use('/test', Testing_API)

//=================================================================

io.on('connection', (socket) => {
  io.sockets.on('disconnect', function () {
    console.log("disconnected ", socket.id)
    // handle disconnect
    io.sockets.disconnect();
    io.sockets.close();
  });
  console.log('new client connected ', socket.id);
  require('./socketHandlers/customerSocket')(socket,io)
  require('./socketHandlers/kitchenSocket')(socket,io)
  require('./socketHandlers/BarSocket')(socket,io)
  require('./socketHandlers/resturantSocket')(socket,io)
  require('./socketHandlers/waiterSocket')(socket,io)
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
