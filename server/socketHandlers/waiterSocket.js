const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')

//===============================================================
const waiterManager =async(order,socket)=>{
    action_map[data.action_type](data,socket)
    const waiter_orders = getWaiterOrder()
    socket.broadcast.emit("waiter",waiter_orders)
}
//===============================================================


const addWaiterOrder = async(order)=>{
    await sequelize.query(`INSERT INTO order_waiter(table_num,order_type,date,status)
    VALUES (${order.tableNum},${order.orderType},'${moment().format()}',0)`)
}
const startWaiterOrder = async(order)=>{
    await sequelize.query(`UPDATE order_waiter
    SET status = 1
    WHERE id=${order.id};`)
}
const completeWaiterOrder = async(order)=>{
    await sequelize.query(`UPDATE order_waiter
    SET status = 2
    WHERE id=${order.id};`)
}
const getWaiterOrder = async()=>{
    //2 here is completed , 0 is not taken , 1 is in progress
    const waiter_orders = await sequelize.query(`SELECT *
    FROM order_waiter
    where status != 2`)
    return waiter_orders[0]
}
//===============================================================
// const emitToWaiterr =(order,socket)=>{
//     socket.broadcast.emit("waiter",result)
// }
//===============================================================
const action_map = {
    "0":startWaiterOrder,
    "1":completeWaiterOrder,
}
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
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket){
    socket.on('waiterServer', data => {
        console.log("in waiterServer")
        waiterManager(data,socket)
    });
  } 
//===============================================================