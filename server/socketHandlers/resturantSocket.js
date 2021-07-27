const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
//===============================================================
const ResturantManager =async(data,io)=>{
    console.log("in ResturantManager")
    const order_id = await getOrderId(data.tableNum)
    const tableOrder = await getTableOrder(order_id)
    console.log(tableOrder)
    emitToManager(tableOrder,io)
    emitToKitchen(tableOrder,io)
    emitToBar(tableOrder,io)
    io.sockets.emit("customer",{msg:"recivied order",tableNum:data.tableNum})

}
//===============================================================
const emitToManager =(order,io)=>{
    io.sockets.emit("bar",result)
}
const emitToKitchen =(order,io)=>{
    const result = filterMenuItemsByStation(order,actions.STATIONS.KITCHEN)
    console.log('in kitchen')
    io.sockets.emit("kitchen",result)

}
const emitToBar =(order,io)=>{
    const result = filterMenuItemsByStation(order,actions.STATIONS.BAR)
    io.sockets.emit("bar",result)

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
    where table_id=${tableNum}`)
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

