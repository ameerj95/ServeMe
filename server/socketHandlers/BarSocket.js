const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')
//===============================================================
// this socket incharge of changing status of the ordered item
// it aswell creates a waiter order request on finshing an item
//===============================================================
const beginOrderItem = async(order,io)=>{
    await sequelize.query(`UPDATE order_item
    SET status = 1
    WHERE id=${order.id};`)
    var result = await getAllActiveOrders()
    const orders = await populateActiveOrders(result,1)
    io.sockets.emit("kitchen",orders)

}
//===============================================================
const populateActiveOrders = async(orders,station)=>{
    console.log("in populate " ,orders)
    for(order of orders){
        order_items = await getOrderItems(order.id,station)
        order["order_items"] = order_items
    }
    return orders
}
//===============================================================
const getAllActiveOrders =async() =>{
    const activeOrders = await sequelize.query(`SELECT * from order_table
    WHERE status!=3`)
    //console.log(activeOrders)
    return activeOrders[0]
}
//===============================================================
const pickUpOrderItem = async(order,io)=>{
    await sequelize.query(`UPDATE order_item
    SET status = 1
    WHERE id=${order.id};`)
    var result = await getAllActiveOrders()
    const orders = await populateActiveOrders(result,1)
    io.sockets.emit("kitchen",orders)
    await createWaiterOrder(order)
    const waiterOrders = await getAllActiveWaiterOrders()
    io.sockets.emit("waiter",waiterOrders)
}
//===============================================================
const createWaiterOrder = async(order)=>{
    await sequelize.query(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status)
    VALUES (${order.tableNum},${order.order_id},${order.order_type},'${moment().format()},1')`)
}
//===============================================================
const getAllActiveWaiterOrders =async() =>{
    const activeWaiterOrders = await sequelize.query(`SELECT * from order_waiter
    WHERE status!=3`)
    //console.log(activeOrders)
    return activeWaiterOrders[0]
}
//===============================================================
const receiveOrder = async(data,io)
//===============================================================
const action_map = {
    "0":beginOrderItem,
    "1":pickUpOrderItem
}
//===============================================================
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket,io){
    socket.on('kitchenServer', data => {
        console.log("in kitchenServer")
        action_map[data.action](data,io)
    });
  } 

