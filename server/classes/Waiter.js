const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Manager = require('../classes/Manager.js')()
const moment = require('moment')

const WaiterModule = function () {
    const completeWaiterOrder = async(order)=>{
        await sequelize.query(`UPDATE order_waiter
        SET status = 2
        WHERE id=${order.id};`)
        emitToWaiter(io)
        Manager.emitToManagerActiveWaiterOrders()
    }
    const startWaiterOrder = async(order)=>{
        await sequelize.query(`UPDATE order_waiter
        SET status = 1
        WHERE id=${order.id};`)
        Manager.emitToManagerActiveWaiterOrders()
    }
    //===============================================================
    const getAllActiveWaiterOrders = async () => {
        const activeOrders = await sequelize.query(`SELECT * from order_waiter
        WHERE status!=3`)
        return activeOrders[0]
    }
    //==============================================================================
    const emitToWaiter = async (io) => {
        console.log("in waiter ")
        var ActiveOrders = await getAllActiveWaiterOrders()
        io.sockets.emit("waiter", { orders: ActiveOrders, type: 1 })
    }
    //==============================================================================
    const createWaiterOrder = async(order)=>{
        console.log("Created waiter order")
        const waiterOrder = await getOrderDetails(order.item_id)
        console.log(waiterOrder)
        await sequelize.query(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status,item_id)
        VALUES (${waiterOrder.table_num},${waiterOrder.order_id},${order.action_type},'${moment().format()}',0,${waiterOrder.item_id})`)
    }
    //==============================================================================
    const getOrderDetails=async(item_id)=>{
        const order = await sequelize.query(`SELECT name,order_item.id,order_item.order_id as item_id,order_item.status,order_table.table_num,order_table.id as order_id FROM order_item
        LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
        LEFT JOIN order_table on order_table.id = order_item.order_id
        WHERE order_item.id = ${item_id} `)
        return order[0][0]
    }
    //==============================================================================
    return {
        createWaiterOrder : createWaiterOrder,
        emitToWaiter: emitToWaiter,
        completeWaiterOrder:completeWaiterOrder,
        startWaiterOrder:startWaiterOrder,
        getAllActiveWaiterOrders,getAllActiveWaiterOrders
    }
}

module.exports = WaiterModule


