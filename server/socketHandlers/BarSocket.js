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
    io.sockets.emit("bar",orders)
    emitToManager(order,io)

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
    io.sockets.emit("bar",orders)
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
const getOrderItems = async (order_id,station) =>{
    const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.status FROM order_item
    LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
    LEFT JOIN order_table on order_table.id = order_item.order_id
    WHERE order_id = ${order_id} AND station =${station}`)
    return orderItems[0]
}
//===============================================================
//===============================================================
const emitToManager =async(order,io)=>{
    var result = await getAllActiveOrders()
    const orders = await populateManagerActiveOrders(result)
    // console.log('in manager')
    // console.log (orders)
    io.sockets.emit("manager",{orders:orders,action:0})
}
const populateManagerActiveOrders = async(orders)=>{
    console.log("in populate " ,orders)
    for(order of orders){
        order_items = await getOrderItemsManager(order.id)
        order["order_items"] = order_items
    }
    return orders
}
const getOrderItemsManager = async (order_id) =>{
    const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.status FROM order_item
    LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
    LEFT JOIN order_table on order_table.id = order_item.order_id
    WHERE order_id = ${order_id}`)
    return orderItems[0]
}
//===============================================================
// const receiveOrder = async(data,io)
//===============================================================
const action_map = {
    "0":beginOrderItem,
    "1":pickUpOrderItem
}
//===============================================================
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket,io){
    socket.on('barServer', data => {
        console.log("in barServer")
        action_map[data.action](data,io)
    });
  } 

