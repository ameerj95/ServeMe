const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const moment = require('moment')
//===============================================================
const addToCart= async(data,socket)=>{
    //get status if order is active or not
    const status = await getOrderStatus(data.tableNum)
    //if its not active create new one
    if(!status){await createNewOrder(data.tableNum) }
    //get the order ID
    const order_id = await getOrderId(data.tableNum)
    //add the order item and order id into table
    await addItemToOrder(order_id,data.item.id)
    const tableOrder = await getTableOrder(data.tableNum,order_id)
    //emit to all clients connected to this table new order
    socket.broadcast.emit('customer',{...data,tableOrder})
}
//===============================================================
const removeItemFromCart= async(data,socket)=>{
    //get the order ID
    const order_id = await getOrderId(data.tableNum)
    //remove the order from cart based on ID.
    await removeFromCart(data.deletedItem_id)
    const tableOrder = await getTableOrder(data.tableNum,order_id)
    //emit to all clients connected to this table new order
    socket.broadcast.emit('customer',{...data,tableOrder})
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
//===============================================================
const getOrderId = async (tableNum) =>{
    const status = await sequelize.query(`SELECT id from order_table 
    where table_id=${tableNum}`)
    return status[0][0].id
}
//===============================================================
const getOrderStatus = async (tableNum) =>{
    const status = await sequelize.query(`SELECT * from order_table 
    where table_id=${tableNum}`)
    return status[0][0]
}
//===============================================================
const createNewOrder = async (tableNum) =>{
    await sequelize.query(`INSERT INTO order_table(date,table_id,is_active)
    VALUES ('${moment().format()}','${tableNum}',${true})`).then(function ([result]) {
        console.log("done")
})
}
//===============================================================

const addItemToOrder = async (order_id,item_id) =>{
    await sequelize.query(`INSERT INTO order_item(order_id,menu_item_id)
    VALUES (${order_id},${item_id})`)
}

//===============================================================

const removeFromCart = async (id) =>{
    await sequelize.query(`DELETE from order_item
    WHERE id=${id})`)
}
//==================================================================================================
//this function will emit to the resturant entity that its 
const fireOrder=async (data,socket)=>{
    console.log("in fire order")
    const order_id = await getOrderId(data.tableNum)
    const tableOrder = await getTableOrder(data.tableNum,order_id)
    //we want to emit to resturant theres a new order incoming
    socket.emit("resturant",{...tableOrder,tableNum:data.tableNum})

}
//==================================================================================================
const requestService=(data,socket)=>{
    console.log("hi3")
}

const action_map = {
    "0":addToCart,
    "1":fireOrder,
    "2":requestService,
    "3":removeItemFromCart,
}

//=================================================================
exports = module.exports = function(socket){
    socket.on('customer', data => {
        action_map[data.action_type](data,socket)
        //socket.broadcast.emit('customer',data)
    });
  } 
