const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')

const CustomerModule = function () {
    //===============================================================
    const addToCart = async (data, io) => {
        //get status if order is active or not
        const status = await getOrderStatus(data.tableNum)
        //if its not active create new one
        if (!status) { await createNewOrder(data.tableNum) }
        // //get the order ID
        const order_id = await getOrderId(data.tableNum)
        // //add the order item and order id into table
        await addItemToOrder(order_id, data.item_id)
        const tableOrder = await getTableOrder(order_id)
        // //emit to all clients connected to this table new order
        // // socket.broadcast.emit('customer',{...data,tableOrder})
        io.sockets.emit('customer', { ...data, tableOrder })
    }
    //===============================================================
    const removeItemFromCart = async (data, io) => {
        //get the order ID
        const order_id = await getOrderId(data.tableNum)
        //remove the order from cart based on ID.
        await removeFromCart(data.deletedItem_id)
        const tableOrder = await getTableOrder(order_id)
        //emit to all clients connected to this table new order
        io.sockets.emit('customer', { ...data, tableOrder })
    }
    //===============================================================
    const getTableOrder = async (order_id) => {
        const table_order = await sequelize.query(`SELECT *
        FROM order_item
        LEFT JOIN menu_items ON order_item.menu_item_id = menu_items.id
        LEFT JOIN order_table ON order_item.order_id = order_table.id
        where order_id = ${order_id}`)
        //console.log(table_order)
        return table_order[0]
    }
    //===============================================================
    const getOrderId = async (tableNum) => {
        const status = await sequelize.query(`SELECT id from order_table 
        where table_num=${tableNum}`)
        return status[0][0].id
    }
    //===============================================================
    const getOrderStatus = async (tableNum) => {
        const status = await sequelize.query(`SELECT * from order_table 
        where table_num=${tableNum}`)
        return status[0][0]
    }
    //===============================================================
    const createNewOrder = async (tableNum) => {
        await sequelize.query(`INSERT INTO order_table(date,table_num,is_active)
        VALUES ('${moment().format()}','${tableNum}',${true})`).then(function ([result]) {
            console.log("done")
        })
    }
    //===============================================================

    const addItemToOrder = async (order_id, item_id) => {
        await sequelize.query(`INSERT INTO order_item(order_id,menu_item_id,status)
        VALUES (${order_id},${item_id},0)`)
    }

    //===============================================================

    const removeFromCart = async (id) => {
        await sequelize.query(`DELETE from order_item
        WHERE id=${id})`)
    }
    //===============================================================
    const test = () =>{
        console.log("in here made it")
    }

    return {
        addToCart: addToCart,
        test:test,
        removeItemFromCart:removeItemFromCart,
        getTableOrder:getTableOrder
    }
}

module.exports = CustomerModule

