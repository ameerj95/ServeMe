const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')

//===============================================================
const KitchenManager =async(order,socket)=>{
    action_map[data.action_type](data,socket)
    const kitchen_orders = getkitchenOrder()
    socket.broadcast.emit("kitchen",kitchen_orders)
    socket.broadcast.emit("waiter",kitchen_orders)

}
//===============================================================
const getkitchenOrder = async()=>{
    
}

const completeOrder = async(order)=>{
    await sequelize.query(`UPDATE order_kitchen
    SET status = 2
    WHERE id=${order.id};`)
}
//===============================================================
const action_map = {
    "0":completeOrder,
}

//===============================================================
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket,io){
    socket.on('kitchen', data => {
        console.log("in kitchen")
        KitchenManager(data,socket)
    });
  } 

