const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
//===============================================================
const ResturantManager =async(data,io)=>{
    console.log("in ResturantManager")
    const order_id = await getOrderId(data.tableNum)
    const tableOrder = await getTableOrder(order_id)
    console.log('reciving order')
    var result = await getAllActiveOrders()
    emitToKitchen(result,io)
    emitToBar(result,io)
    emitToManager(result,io)
    io.sockets.emit("resturant",{msg:"recivied order",tableNum:data.tableNum})
}
//===============================================================
const emitToManager =async(order,io)=>{
    const orders = await populateManagerActiveOrders(order,1)
    // console.log('in manager')
    // console.log (orders)
    io.sockets.emit("manager",{orders:orders,action:0})
}
const emitToKitchen =async(order,io)=>{
    const orders = await populateActiveOrders(order,1)
    // console.log('in kitchen')
    // console.log (orders)
    io.sockets.emit("kitchen",orders)
}
const emitToBar =async(order,io)=>{
    const orders = await populateActiveOrders(order,2)
    // console.log (orders)
    io.sockets.emit("kitchen",orders)

}
//===============================================================
const populateManagerActiveOrders = async(orders)=>{
    console.log("in populate " ,orders)
    for(order of orders){
        order_items = await getOrderItemsManager(order.id)
        order["order_items"] = order_items
    }
    return orders
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
const getAllActiveOrdersByStation = () =>{

}
//===============================================================
const getAllActiveOrders =async() =>{
    const activeOrders = await sequelize.query(`SELECT * from order_table
    WHERE status!=3`)
    //console.log(activeOrders)
    return activeOrders[0]
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
const getOrderItemsManager = async (order_id) =>{
    const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.status FROM order_item
    LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
    LEFT JOIN order_table on order_table.id = order_item.order_id
    WHERE order_id = ${order_id}`)
    return orderItems[0]
}
//===============================================================
const filterMenuItemsByStation=(order,type)=>{
    return order.filter(item => item.station == type )
}
//===============================================================
const getTableOrder = async (order_id)=>{
    const table_order = await sequelize.query(`SELECT *
    FROM order_item
    LEFT JOIN menu_items ON order_item.menu_item_id = menu_items.id
    LEFT JOIN order_table ON order_item.order_id = order_table.id
    where order_id = ${order_id}`)
    return table_order[0]
}
const getOrderId = async (tableNum) =>{
    const status = await sequelize.query(`SELECT id from order_table 
    where table_num=${tableNum}`)
    return status[0][0].id
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

