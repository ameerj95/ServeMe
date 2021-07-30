const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Manager = require('../classes/Manager.js')()
const Kitchen = require('../classes/Kitchen.js')()
const Bar = require('../classes/Bar.js')()

//===============================================================
const ResturantManager =async(data,io)=>{
    console.log("in ResturantManager")
    Kitchen.emitToKitchen(io)
    Bar.emitToBar(io)
    Manager.emitToManagerActiveFoodOrders(io)
    io.sockets.emit("customer",{msg:"recivied order",tableNum:data.tableNum})
}

//===============================================================
//in this socket we want to recive the following
//input -> order_id
exports = module.exports = function(socket,io){
    socket.on('resturant', data => {
        console.log("in resturant")
        ResturantManager(data,io)
    });
  } 

